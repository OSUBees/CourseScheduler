import React, { Component } from "react";
import CourseItem from "../CourseItem/CourseItem.js";
import { Droppable } from "react-beautiful-dnd";
import "./Prerequisites.module.css";

class Prerequisites extends Component {
  state = {};

  render() {
    const { courses, prerequisite } = this.props;

    return (
      <Droppable droppableId={prerequisite.name} key={prerequisite.id}>
        {(provided, snapshot) => {
          return (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="d-flex flex-column w-10 mx-auto p-3 text-center bg-secondary  h-80 shadow rounded-3"
            >
              <div className="shadow my-2 bg-dark rounded-3 p-2">
                <h3 className="text-white">Prerequisites Met</h3>
                <div style={{height: "700px", overflow: "auto"}}className="shadow-sm d-flex justify-content-between flex-column">
                  {courses.map((course, index) => {
                    return (
                      <CourseItem
                        className="overflow-scroll px-3  shadow-sm "
                        key={course.course_courseId}
                        course={course}
                        index={index}
                      />
                    );
                  })}
                </div>
              </div>
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    );
  }
}

export default Prerequisites;
