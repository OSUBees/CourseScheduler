import React, { Component } from "react";

class CommentLine extends Component {
  state = {};
  render() {
    return (
      <div className="row bg-light">
        <div className="col-5">rating</div>
        <div className="col-7">comments</div>
      </div>
    );
  }
}

export default CommentLine;
