import React, { Component } from "react";
import "./CourseItem.module.css";
import { Draggable } from "react-beautiful-dnd";
import CommentBoxOverlay from "../commentboxoverlay";

class CourseItem extends Component {
  state = {};

  returnOverlay(course) {
    return <CommentBoxOverlay key={course.course_id} course={course} />;
  }

  render() {
    const { courses, course, index } = this.props;
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
                <CommentBoxOverlay course={course} />

                <a
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  href="#exampleModalToggle"
                  role="button"
                >
                  <div className=".course">
                    <h3 className="text-center">{course.course_number}</h3>
                    <div className="text-center">
                      Credit: {course.course_credit_hours}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          );
        }}
      </Draggable>
    );
  }
}

export default CourseItem;
