import { Fragment } from "react";
import Card from "../UI/Card";
import CourseItem from "../CourseItem/CourseItem.js";

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
    <Fragment>
      <div>Semester X</div>
      <Card>
        <ul>{coursesList}</ul>
      </Card>
      <div>Total Credit:XX</div>
    </Fragment>
  );
};

export default Semester;
