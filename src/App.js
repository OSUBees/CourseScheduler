import "./App.css";
import React, { Component } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import CommentBoxOverlay from "./components/commentboxoverlay";

class App extends Component {
  state = {
    semesters: [],
    courses: [],
    professors: [],
  };

  getSemesters() {
    const dbRef = ref(getDatabase(), "semesters");
    onValue(dbRef, (snapshot) => {
      this.setState({ semesters: snapshot.val() });
    });
  }
  getCourses() {
    const dbRef = ref(getDatabase(), "courses");
    onValue(dbRef, (snapshot) => {
      const courses = snapshot.val();
      this.setState({ courses });
    });
  }
  getProfessors() {
    const dbRef = ref(getDatabase(), "professors");
    onValue(dbRef, (snapshot) => {
      const professors = snapshot.val();
      this.setState({ professors });
    });
  }

  componentDidMount() {
    console.log("mounted");
    this.getCourses();
    this.getSemesters();
    this.getProfessors();
  }

  render() {
    const { courses, professors, semesters } = this.state;
    return (
      <div>
        <CommentBoxOverlay
          semesters={semesters}
          courses={courses}
          professors={professors}
          getSemesters={this.getSemesters}
        />
      </div>
    );
  }
}

export default App;
