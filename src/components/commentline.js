import React, { Component } from "react";
import StarIcon from "@mui/icons-material/Star";

class CommentLine extends Component {
  state = {};

  render() {
    return (
      <div className="row m-0 p-0">
        <div className="col-5">
          <StarIcon className="text-primary border-primary" />
          <StarIcon className="text-light border-primary" />
        </div>
        <div className="col-7">comments</div>
      </div>
    );
  }
}

export default CommentLine;
