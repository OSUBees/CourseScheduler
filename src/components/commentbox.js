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
    return (
      <div
        className="row w-50 m-auto my-5 rounded-top pt-3"
        style={this.styles}
      >
        <h2 className="text-lg">Professor Name</h2>
        <CommentLine />
        <CommentLine />
        <CommentLine />
        <EnterComment />
      </div>
    );
  }
}

export default CommentBox;
