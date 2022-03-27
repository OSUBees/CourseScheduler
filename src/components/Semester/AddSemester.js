import React, { Component } from "react";
import "./Semester.module.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { getDatabase, ref, set } from "firebase/database";

class AddSemester extends Component {
  state = {};

  addIconStyle = {
    fontSize: "75px",
  };

  addCourse(semesters) {
    const length = semesters.length + 1;
    semesters.push({
      id: "semester" + length,
      name: "Semester " + length,
      courses: [],
    });
    return semesters;
  }

  writeUserData(semesters) {
    console.log("writing data...");
    
      set(ref(getDatabase(), "semesters"), semesters);
    
    
  }

  render() {
    const { semesters } = this.props;
    return (
      <div
        className="d-inline-flex  flex-column  mx-2 p-1  w-40 block bg-secondary rounded-3 text-white"
        onClick={() => this.writeUserData(this.addCourse(semesters))}
      >
        <div className="m-auto">
          <div className="text-center">
            <AddCircleOutlineIcon
              fontSize="large"
              className="text-white text-lg"
              style={this.addIconStyle}
            />
          </div>
          <div className="mx-5 fw-bold fs-3">Add Semester</div>
        </div>
      </div>
    );
  }
}

export default AddSemester;
