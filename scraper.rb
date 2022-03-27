# frozen_string_literal: true

require 'mechanize'
require 'json'

# scrape course information from http://classes.osu.edu/
class Scrape
  # Initializes a new instance of a Scrape
  #
  # @param term [Number] term id to scrape data for
  # @return [Scrape] a new instance of Scrape
  def initialize(term)
    # URL elements to scrape with
    @URL_HEAD = 'https://content.osu.edu/v2/classes/search?q=cse&campus=col&p='
    @URL_FOOTER = "&term=#{term}&subject=cse&academic-career=ugrd"
    @page_num = 1
    @directory = 'database'
    # mechanize object
    @agent = Mechanize.new
    # total pages from results
    @total_pages = JSON.parse(@agent.get(generate_url).body)['data']['totalPages']
  end

  # Scrapes data for each course on the current page and generates a json file
  # for each course to store the scraped data.
  #
  # @param page_num [Number] page number to scrape data from
  def scrape!(page_num)
    @page_num = page_num

    page_data = @agent.get(generate_url).body
    data = JSON.parse(page_data)

    # gets all the courses
    courses = data['data']['courses']
    course_id_array = []

    courses.each do |course|
      course_id = course['course']['catalogNumber']
      course_id_array.uniq!

      if course_id_array.include? course_id
        # add to instructors
        course_info = get_from_file(course_id)
        instructors = course_info['course_instructors']
        course['sections'].each do |section|
          instructors << {
            name: section['meetings'][0]['instructors'][0]['displayName'],
            email: section['meetings'][0]['instructors'][0]['email']
          }
        end
        course_info['course_instructors'] = instructors
      else
        course_id_array << course_id
        course_info = create_course_object(course)
      end
      print_to_file(course_info, course_id)
    end
  end

  def create_course_object(course)
    course_info = {}
    instructors = []

    course_info['course_courseId'] = course['course']['courseId'] # uuid
    course_info['course_name'] = course['course']['title']
    course_info['course_short_description'] = course['course']['shortDescription']
    course_info['course_description'] = course['course']['description']
    # get number of credit hours
    course_info['course_credit_hours'] = if course['course']['minUnits'] == course['course']['maxUnits']
                                           course['course']['maxUnits']
                                         else
                                           # range of credit hours
                                           "#{course['course']['minUnits']} - #{course['course']['maxUnits']}"
                                         end
    course_info['course_number'] = "#{course['course']['subject']} #{course['course']['catalogNumber']}"
    course_info['course_campus'] = course['course']['campus']
    course_info['course_catalogLevel'] = course['course']['catalogLevel'] # "5xxx"
    course_info['course_subjectDesc'] = course['course']['subjectDesc'] # "Computer Science & Engineering"

    # each section in the course
    course['sections'].each do |section|
      # sample of instructor array in section
      #
      # "instructors": [
      #   {
      #     "displayName": "Michelle Ann Mallon",
      #     "role": "PI",
      #     "email": "mallon.3@osu.edu"
      #   },
      #   {
      #     "displayName": "Nitish Reddy Ammireddy",
      #     "role": "TA",
      #     "email": "ammireddy.1@osu.edu"
      #   }
      # ]

      instructors << {
        name: section['meetings'][0]['instructors'][0]['displayName'],
        email: section['meetings'][0]['instructors'][0]['email']
      }
      # remove all duplicates
      instructors.uniq!
    end
    course_info['course_instructors'] = instructors
    course_info['course_prerequisites'] = /\n.+/.match(course_info['course_description'])
    course_info
  end

  def get_from_file(course_id)
    file_path = "#{__dir__}/#{@directory}/#{course_id}.json"
    file = File.read(file_path)
    JSON.parse(file)
  end

  def print_to_file(data, course_id)
    # save course information to a json file
    file_path = "#{__dir__}/#{@directory}/#{course_id}.json"
    if File.exist? file_path
      puts 'File already exists'
      file_index = 0
      # if the course file already exists, append a number to the end of the file name
      while File.exist? file_path
        file_index += 1
        file_path = "#{__dir__}/database/remove-#{course_id}-#{file_index}.json"
      end
    else
      classes_path = "#{__dir__}/classes"
      if !(File.file? classes_path)
        File.open(classes_path, 'w') { |file| file.write "#{course_id}\n" }
      else
        File.open(classes_path, 'a') { |file| file.write "#{course_id}\n" }
      end
    end
    json_text = JSON.generate(data)
    puts "Writing to #{file_path}..."
    File.open(file_path, 'w') { |file| file.write json_text }
  end

  # Returns the total amount of pages to scrape
  def get_total_pages
    @total_pages
  end

  # Generates the url (api call) to scrape data from
  private def generate_url
    "#{@URL_HEAD}#{@page_num}#{@URL_FOOTER}"
  end
end

# empty directory
FileUtils.rm_rf "#{__dir__}/database"
FileUtils.mkdir "#{__dir__}/database"

# use the command line argument for the term if provided
term = if ARGV.empty?
         1222 # default term
       else
         ARGV[0]
       end

# scrape each available page
scraper = Scrape.new term
current_page = 1

while current_page <= scraper.get_total_pages
  scraper.scrape! current_page
  current_page += 1
end

database = {}
all_courses = []
puts 'Consolidating data...'
Dir["#{__dir__}/database/*"].each do |file_path|
  if file_path.include? 'remove'
    # remove all uneccessary files (remove- prefix)
    FileUtils.rm_rf file_path
  else
    puts file_path
    data = JSON.parse(File.read(file_path))
    all_courses << data
  end
end
database['courses'] = all_courses
# save course information to a json file
file_path = "#{__dir__}/#{@directory}/database/course_database.json"
json_text = JSON.generate(database)
puts "Writing to #{file_path}..."
File.open(file_path, 'w') { |file| file.write json_text }
