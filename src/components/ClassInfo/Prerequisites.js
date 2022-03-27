import React, { Component } from "react";

import CourseItem from "../CourseItem/CourseItem.js";
import { Droppable } from "react-beautiful-dnd";

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
              className="p-3 text-center bg-secondary  shadow rounded-3 "
            >
              <div className="shadow my-2 bg-dark rounded-3 p-2">
                <h3>Prerequisites Met</h3>
                <div className="shadow-sm d-flex justify-content-between flex-wrap">
                  {courses.map((course, index) => {
                    return (
                      <CourseItem
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
