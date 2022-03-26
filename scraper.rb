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

    # save all data to a json file
    file_path = "#{__dir__}/#{@directory}/data.json"
    if File.exist? file_path
      puts 'File already exists'
      file_index = 0
      # if the course file already exists, append a number to the end of the file name
      while File.exist? file_path
        file_index += 1
        file_path = "#{__dir__}/#{@directory}/data-#{file_index}.json"
      end
    end
    json_text = JSON.generate(data)
    puts 'writing to file...'
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
