import React, { Component } from "react";
import CommentBox from "./commentbox";

class CommentBoxOverlay extends Component {
  state = {};

  render() {
    const { course } = this.props;
    return (
      <div>
        <div
          className="modal fade text-dark"
          id="exampleModalToggle"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
          tabindex="-1"
        >
          <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content ">
              <div className="modal-header d-flex flex-row">
                <div className="inline-flex m-auto flex-column">
                  <h2 className="text-center">{course.course_name}</h2>
                  <h5 className="text-center">{course.course_number}</h5>
                  <h5>{course.course_description}</h5>
                </div>
                <div className="inline-flex flex-column align-self-start">
                  <button
                    type="button "
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
              </div>
              <div className="comment-box-overlay-container">
                {course.course_instructors.map((instructor, index) => {
                  return <CommentBox key={index} instructor={instructor} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentBoxOverlay;

// render() {
//   return (
//     <div>
//       <div
//         class="modal fade"
//         id="exampleModalToggle"
//         aria-hidden="true"
//         aria-labelledby="exampleModalToggleLabel"
//         tabindex="-1"
//       >
//         <div class="modal-dialog modal-dialog-centered modal-xl">
//           <div class="modal-content ">
//             <div class="modal-header d-flex flex-row">
//               <div className="inline-flex m-auto flex-column">
//                 <h2 class="text-center">Course Name</h2>
//                 <h5 class="text-center">Course NUm</h5>
//                 <h5>
//                   Course Description Course Description Course Description
//                   Course Description Course Description Course Description
//                   Course Description Course Description Course Description
//                   Course Description
//                 </h5>
//               </div>
//               <div className="inline-flex flex-column align-self-start">
//                 <button
//                   type="button "
//                   class="btn-close"
//                   data-bs-dismiss="modal"
//                   aria-label="Close"
//                 ></button>
//               </div>
//             </div>
//             <div className="comment-box-overlay-container">
//               <CommentBox />
//               <CommentBox />
//               <CommentBox />
//               <CommentBox />
//               <CommentBox />
//               <CommentBox />
//             </div>
//           </div>
//         </div>
//       </div>

//       <a
//         class="btn btn-primary"
//         data-bs-toggle="modal"
//         href="#exampleModalToggle"
//         role="button"
//       >
//         Open first modal
//       </a>
//     </div>
//   );
// }
