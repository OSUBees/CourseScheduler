import React, { Component } from "react";
import CommentLine from "./commentline";
import EnterComment from "./entercomment";

class CommentBox extends Component {
  state = {};
  render() {
    return (
      <div className="row w-50 m-auto">
        <CommentLine />
        <CommentLine />
        <CommentLine />
        <EnterComment />
      </div>
    );
  }
}

export default CommentBox;
