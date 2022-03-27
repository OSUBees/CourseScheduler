import CourseItem from "../CourseItem/CourseItem.js";
import React, { Component } from "react";
import { Droppable } from "react-beautiful-dnd";
import "./Semester.module.css";

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
              className="d-flex  flex-column flex-wrap mx-2 p-3  w-auto block bg-secondary rounded-3 text-white"
            >
              <div className="mx-auto fw-bold fs-3 ">Semester X</div>
              <div className="d-flex flex-wrap mx-auto w-80 mt-5 p-2">
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
              <div className="mx-auto fw-bold fs-3 mt-5">Total Credit:XX</div>
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    );
  }
}

export default Semester;
