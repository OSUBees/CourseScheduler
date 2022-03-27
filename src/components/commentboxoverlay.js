import React, { Component } from "react";
import CommentBox from "./commentbox";

class CommentBoxOverlay extends Component {
  state = {};

  render() {
    return (
      <div>
        <div
          class="modal fade"
          id="exampleModalToggle"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
          tabindex="-1"
        >
          <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content ">
              <div class="modal-header d-flex flex-row">
                <div className="inline-flex m-auto flex-column">
                  <h2 class="text-center">Course Name</h2>
                  <h5 class="text-center">Course NUm</h5>
                  <h5>
                    Course Description Course Description Course Description
                    Course Description Course Description Course Description
                    Course Description Course Description Course Description
                    Course Description
                  </h5>
                </div>
                <div className="inline-flex flex-column align-self-start">
                  <button
                    type="button "
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
              </div>
              <div className="comment-box-overlay-container">
                <CommentBox />
                <CommentBox />
                <CommentBox />
                <CommentBox />
                <CommentBox />
                <CommentBox />
              </div>
            </div>
          </div>
        </div>

        <a
          class="btn btn-primary"
          data-bs-toggle="modal"
          href="#exampleModalToggle"
          role="button"
        >
          Open first modal
        </a>
      </div>
    );
  }
}

export default CommentBoxOverlay;
