import React, { Component } from "react";

import classes from "./CourseItem.module.css";
import { Draggable } from "react-beautiful-dnd";

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
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              className={
                classes.card +
                " rounded-3 m-2 w-auto px-5 py-3 d-flex flex-column bg-primary text-white  d-inline-flex"
              }
            >
              <div className="classes.course">
                <h3 className={classes.name}>{course.course_number}</h3>
                <div className={classes.credit}>
                  Credit: {course.course_credit_hours}
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
