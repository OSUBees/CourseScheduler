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
              className="d-inline-flex  flex-column  mx-2 p-1  w-40 block bg-light rounded-3 text-black text-center shadow"
            >
              <div className="mx-5 fw-bold fs-3 ">{semester.name}</div>
              <div className="mx-5 fw-bold fs-3 mt-5">
                Total Credit:{semester.totalCredit}
              </div>
              <div className="d-flex flex-column mx-auto w-80 mt-5 p-2">
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

              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    );
  }
}

export default Semester;
