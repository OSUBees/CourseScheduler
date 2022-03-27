import React, { Component } from "react";
import Semester from "./Semester.js";
import "./SemesterList.module.css";

class SemesterList extends Component {
  state = {};
  render() {
    const { semesters } = this.props;
    return (
      <div className="w-55 overflow-scroll h-100 d-flex">
        {semesters.map((semester) => {
          return (
            <Semester
              className="mx-2 h-90 d-flex bg-secondary flex-wrap"
              key={semester.id}
              semester={semester}
            />
          );
        })}
      </div>
    );
  }
}

export default SemesterList;
