import React from "react";
import CourseItem from "../CourseItem/CourseItem.js";

const DUMMY_MET = [
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

const DUMMY_UNMET = [
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

function Prerequisites(prop) {
  const metList = DUMMY_MET.map((course) => (
    <CourseItem
      id={course.id}
      name={course.name}
      description={course.description}
      credit={course.credit}
    />
  ));

  const unMetList = DUMMY_UNMET.map((course) => (
    <CourseItem
      id={course.id}
      name={course.name}
      description={course.description}
      credit={course.credit}
    />
  ));

  return (
    <div className="p-3 text-center bg-secondary  shadow rounded-3 ">
      <div className="shadow my-2 bg-dark rounded-3 p-2">
        <h3>Prerequisites Met</h3>
        <div className="shadow-sm d-flex justify-content-between flex-wrap">
          {metList}
        </div>
      </div>
      <div className="shadow my-2 bg-dark rounded-3 p-2">
        <h3>Prerequisites Unmet</h3>
        <div className="shadow-sm d-flex justify-content-between flex-wrap">
          {unMetList}
        </div>
      </div>
    </div>
  );
}

export default Prerequisites;
