import React, { Component } from "react";

import "./CourseItem.module.css";
import { Draggable } from "react-beautiful-dnd";
// import "./CourseItem.module.css";

class CourseItem extends Component {
  state = {};

  render() {
    const { course, index } = this.props;

    return (
      <Draggable
        key={course.course_courseId}
        draggableId={course.course_courseId}
        index={index}
      >
        {(provided, snapshot) => {
          return (
            <div className="d-block">
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              className="rounded-3 mx-auto my-2 w-20 p-auto d-block flex-column bg-primary text-white"
            >
              <div className=".course">
                <h3 className="text-center">{course.course_number}</h3>
                <div className="text-center">
                  Credit: {course.course_credit_hours}
                </div>
              </div>
              </div>
              </div>
          );
        }}
      </Draggable>
    );
  }
}

export default CourseItem;
