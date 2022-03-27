import CourseItem from "../CourseItem/CourseItem.js";
import classes from "./Semester.module.css";
import React, { Component } from "react";
import { Droppable } from "react-beautiful-dnd";

class Semester extends Component {
  state = {};

  render() {
    const { semester } = this.props;
    return (
      <Droppable droppableId={semester.id} key={semester.id}>
        {(provided, snapshot) => {
          return (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={classes.card + " w-25" + classes.block}
            >
              <div>Semester X</div>
              <div className={classes.courses + "w-auto"}>
                {semester.courses.map((course, index) => {
                  return (
                    <CourseItem
                      key={course.course_courseId}
                      course={course}
                      index={index}
                    />
                  );
                })}
              </div>
              <div>Total Credit:XX</div>
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    );
  }
}

export default Semester;

// const DUMMY_COURSES = [
//   {
//     id: "c1",
//     name: "CSE2221",
//     description: "Software 1",
//     credit: 4,
//   },
//   {
//     id: "c2",
//     name: "CSE2231",
//     description: "Software 2",
//     credit: 3,
//   },
//   {
//     id: "c3",
//     name: "CSE2321",
//     description: "Foundation 1",
//     credit: 3,
//   },
//   {
//     id: "c4",
//     name: "CSE2331",
//     description: "Foundation 2",
//     credit: 3,
//   },
// ];
// const Semester = () => {
//   const coursesList = DUMMY_COURSES.map((course) => (
//     <CourseItem
//       id={course.id}
//       name={course.name}
//       description={course.description}
//       credit={course.credit}
//     />
//   ));

// };
