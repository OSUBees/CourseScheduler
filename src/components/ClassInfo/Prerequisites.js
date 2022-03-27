import React from "react";
import CourseItem from "../CourseItem/CourseItem.js";
import ClassInfo from "./ClassInfo.js";

const class1 = {
  id: "c1",
  name: "CSE2221",
  description: "Software 1",
  credit: 4,
};
const class2 = {
  id: "c2",
  name: "CSE2231",
  description: "Software 2",
  credit: 3,
};
const class3 = {
  id: "c3",
  name: "CSE2321",
  description: "Foundation 1",
  credit: 3,
};

export default function Prerequisites(prop) {
  return (
    <div className="p-3 text-center bg-secondary  shadow rounded-3 ">
      <div className="shadow my-2 bg-dark rounded-3 p-2">
        <h3>Prerequisites Met</h3>
        <div className="shadow-sm d-flex justify-content-between flex-wrap">
          <CourseItem section={class1} />
          <CourseItem section={class2} />
          <CourseItem section={class3} />
        </div>
      </div>
      <div className="shadow my-2 bg-light rounded-3 p-2">
        <h3>Prerequisites Met</h3>
        <div className="shadow-sm d-flex justify-content-between flex-wrap">
          <CourseItem section={class1} />
          <CourseItem section={class2} />
          <CourseItem section={class3} />
        </div>
      </div>
    </div>
  );
}
