import React, { Component } from "react";
import AddSemester from "./AddSemester.js";
import Semester from "./Semester.js";
import "./SemesterList.module.css";

class SemesterList extends Component {
  state = {};

  returnSemester(semester) {
    return (
      <Semester
        className="mx-2 h-90 d-flex bg-secondary flex-wrap"
        key={semester.id}
        semester={semester}
      />
    );
  }
  render() {
    const { semesters, addSemester } = this.props;

    return (
      <div className="w-40 overflow-scroll h-100 d-flex">
        {semesters.map((semester) => this.returnSemester(semester))}
        <AddSemester semesters={semesters} addSemester={addSemester} />
      </div>
    );
  }
}

export default SemesterList;
