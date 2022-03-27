import React, { Component } from "react";
import CommentIcon from "@mui/icons-material/Comment";
import StarIcon from "@mui/icons-material/Star";

class EnterComment extends Component {
  state = {
    starClicked: [false, false, false, false, false],
  };

  render() {
    const { starClicked } = this.state;
    return (
      <div className="row m-0 p-0">
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
                  className={clicked ? "text-primary" : "text-light"}
                  onClick={() => this.setClicked(index)}
                />
              ))}
            </span>
          </div>
          <input
            type="text"
            class="form-control"
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
}

export default EnterComment;
