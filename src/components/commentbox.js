import React, { Component } from "react";
import CommentLine from "./commentline";
import EnterComment from "./entercomment";

class CommentBox extends Component {
  state = {};

  styles = {
    backgroundColor: "#e9ecef",
    border: "1px solid #ced4da",
  };

  render() {
    const { instructor } = this.props;
    return (
      <div
        className="row w-75 m-auto my-5 rounded-top pt-3"
        style={this.styles}
      >
        <h2 className="text-lg">{instructor.name}</h2>
        <div className="comment-line-container">
          <CommentLine />
          <CommentLine />
          <CommentLine />
          <CommentLine />
          <CommentLine />
          <CommentLine />
          <CommentLine />
          <CommentLine />
          <CommentLine />
          <CommentLine />
          <CommentLine />
          <CommentLine />
          <CommentLine />
          <CommentLine />
          <CommentLine />
          <CommentLine />
          <CommentLine />
        </div>

        <EnterComment />
      </div>
    );
  }
}

export default CommentBox;
