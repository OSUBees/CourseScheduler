import React, { Component } from "react";
import Semester from "./Semester.js";
import classes from "./SemesterList.module.css";

class SemesterList extends Component {
  state = {};
  render() {
    const { semesters } = this.props;
    return (
      <div className={classes.list}>
        {semesters.map((semester) => {
          return <Semester key={semester.id} semester={semester} />;
        })}
      </div>
    );
  }
}

export default SemesterList;
