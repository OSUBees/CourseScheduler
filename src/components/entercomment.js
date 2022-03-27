import React, { Component } from "react";
import CommentIcon from "@mui/icons-material/Comment";
import StarIcon from "@mui/icons-material/Star";
import { getDatabase, ref, set } from "firebase/database";

class EnterComment extends Component {
  state = {
    starClicked: [false, false, false, false, false],
  };

  render() {
    // let { courses, getSemesters } = this.props;
    const { starClicked } = this.state;

    return (
      <div className="row m-0 p-0 mt-1">
        <div class="input-group p-0">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <CommentIcon />
            </span>
          </div>
          <div class="input-group-prepend">
            <span class="input-group-text">
              {starClicked.map((clicked, index) => (
                <StarIcon
                  key={index}
                  className={clicked ? "text-primary" : "text-secondary"}
                  onClick={() => this.setClicked(index)}
                />
              ))}
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Comments"
            aria-label="Enter Comments"
          ></input>
          <div class="input-group-append">
            <span class="input-group-text">Send</span>
          </div>
        </div>
      </div>
    );
  }

  setClicked(index) {
    const { starClicked } = this.state;
    if (starClicked[index]) {
      //already clicked
      starClicked.splice(index, 1);
      starClicked.push(false);
    } else {
      // not clicked
      starClicked.splice(index, 1);
      starClicked.unshift(true);
    }
    this.setState(starClicked);
  }

  // addComment(courseArr, newCourse) {
  //   return courseArr.push(newCourse);
  // }

  writeUserData(courseArr) {
    set(ref(getDatabase(), "courses"), courseArr);
    // for send button
    // onClick={() =>
    //   this.writeUserData(this.addComment(courses, newCourse))
    // }
  }
}

export default EnterComment;
