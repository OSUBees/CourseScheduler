import CourseItem from "../CourseItem/CourseItem.js";
import  "./Semester.module.css";

const DUMMY_COURSES = [
  {
    id: "c1",
    name: "CSE2221",
    description: "Software 1",
    credit: 4,
  },
  {
    id: "c2",
    name: "CSE2231",
    description: "Software 2",
    credit: 3,
  },
  {
    id: "c3",
    name: "CSE2321",
    description: "Foundation 1",
    credit: 3,
  },
  {
    id: "c4",
    name: "CSE2331",
    description: "Foundation 2",
    credit: 3,
  },
];

const Semester = () => {
  const coursesList = DUMMY_COURSES.map((course) => (
    <CourseItem
      id={course.id}
      name={course.name}
      description={course.description}
      credit={course.credit}
    />
  ));

  return (
    <div className="d-flex  flex-column flex-wrap mx-2 p-3  w-auto block bg-secondary rounded-3 text-white">
      
      <p className="mx-auto fw-bold fs-3 ">Semester X</p>
      <p className="mx-auto fw-bold fs-3 mt-5">Total Credit:XX</p>
      <div className="d-flex flex-wrap mx-auto w-80 mt-5 p-2">{coursesList}</div>
      <div className="mx-auto">
        
      
      </div>
      
    </div>
  );
};

export default Semester;
