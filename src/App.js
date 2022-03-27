import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Prerequisites from "./components/ClassInfo/Prerequisites.js";
import SemesterList from "./components/Semester/SemesterList.js";
import Semester from "./components/Semester/Semester";

class App extends Component {
  state = {
    courses: [
      {
        course_courseId: "150518",
        course_name: "Foundations II: Data Structures and Algorithms",
        course_short_description: "Fndns 2: DS & Alg",
        course_description:
          "Design/analysis of algorithms and data structures; divide-and-conquer; sorting and selection, search trees, hashing, graph algorithms, string matching; probabilistic analysis; randomized algorithms; NP-completeness.\nPrereq: 2231, 2321, and Stat 3460 or 3470, and enrollment in CSE, CIS, ECE, Data Analytics, or Math major, or CIS minor. Concur: Math 3345. Not open to students with credit for 5331.",
        course_credit_hours: 3,
        course_number: "CSE 2331",
        course_campus: "Columbus",
        course_catalogLevel: "2xxx",
        course_subjectDesc: "Computer Science & Engineering",
        course_instructors: [
          { name: "Kenneth Jay Supowit", email: "supowit.1@osu.edu" },
          { name: "Rephael S Wenger", email: "wenger.4@osu.edu" },
          { name: "Nick Painter", email: "painter.167@osu.edu" },
          {
            name: "Ali AlilooeeDolatabad",
            email: "alilooeedolatabad.1@osu.edu",
          },
        ],
        course_prerequisites:
          "\nPrereq: 2231, 2321, and Stat 3460 or 3470, and enrollment in CSE, CIS, ECE, Data Analytics, or Math major, or CIS minor. Concur: Math 3345. Not open to students with credit for 5331.",
      },
      {
        course_courseId: "150546",
        course_name:
          "Project: Design, Development, and Documentation of Web Applications",
        course_short_description: "Proj: Web Apps",
        course_description:
          "Intensive group project involving design, development, and documentation of a web application; client-side and server-side scripting; communication skills emphasized; builds programming maturity.\nPrereq: 2231; and 2321; and 2421 or 3430, or 2451 and ECE 2560; and enrollment in CSE, CIS, ECE, or Data Analytics major.",
        course_credit_hours: 4,
        course_number: "CSE 3901",
        course_campus: "Columbus",
        course_catalogLevel: "3xxx",
        course_subjectDesc: "Computer Science & Engineering",
        course_instructors: [
          { name: "Charlie Giles", email: "giles.25@osu.edu" },
          { name: "Scott Sharkey", email: "sharkey.30@osu.edu" },
        ],
        course_prerequisites:
          "\nPrereq: 2231; and 2321; and 2421 or 3430, or 2451 and ECE 2560; and enrollment in CSE, CIS, ECE, or Data Analytics major.",
      },
    ],
    semesters: [
      {
        id: "semester 1",
        name: "semester 1",
        courses: [
          {
            course_courseId: "150588",
            course_name:
              "Undergraduate Research in Computer Science and Engineering",
            course_short_description: "HonUG Research CSE",
            course_description:
              "Opportunity for undergraduate student to conduct research in Computer Science and Engineering.\r\nPrereq: Honors standing, and permission of instructor. Repeatable to a maximum of 10 cr hrs or 10 completions. This course is graded S/U.",
            course_credit_hours: "10 - 10",
            course_number: "CSE 4998H",
            course_campus: "Columbus",
            course_catalogLevel: "4xxx",
            course_subjectDesc: "Computer Science & Engineering",
            course_instructors: [
              { name: "Kannan Athreya", email: "athreya.14@osu.edu" },
              { name: "Raef B Bassily", email: "bassily.1@osu.edu" },
              { name: "Mike Bond", email: "bond.213@osu.edu" },
              {
                name: "Facundo Memoli Techera",
                email: "memolitechera.1@osu.edu",
              },
              {
                name: "Srinivasan Parthasarathy",
                email: "parthasarathy.2@osu.edu",
              },
              { name: "Feng Qin", email: "qin.34@osu.edu" },
              { name: "Rajiv Ramnath", email: "ramnath.6@osu.edu" },
              { name: "Gregory Ryslik", email: "ryslik.1@osu.edu" },
              { name: "Atanas Ivanov Rountev", email: "rountev.1@osu.edu" },
              { name: "Han-Wei Shen", email: "shen.94@osu.edu" },
              { name: "Kenneth Jay Supowit", email: "supowit.1@osu.edu" },
              { name: "Deliang Wang", email: "wang.77@osu.edu" },
              { name: "Huamin Wang", email: "wang.3602@osu.edu" },
              { name: "Yang Wang", email: "wang.7564@osu.edu" },
              { name: "Xiaodong Zhang", email: "zhang.574@osu.edu" },
              {
                name: "Andrew Raymond Trueman Perrault",
                email: "perrault.17@osu.edu",
              },
              { name: null, email: null },
            ],
            course_prerequisites:
              "\nPrereq: Honors standing, and permission of instructor. Repeatable to a maximum of 10 cr hrs or 10 completions. This course is graded S/U.",
          },
        ],
      },
    ],
    prerequisite: {
      id: 1,
      name: "Prereq Column",
    },
  };

  onDragEnd(result) {
    // nothing will happen if card is dropped outside
    if (!result.destination) return;
    let { courses, semesters } = this.state;
    const { source, destination } = result;
    const courseId = result.draggableId;
    const sourceColumn = source.droppableId;
    const destColumn = destination.droppableId;

    if (destColumn.match(/semester.*/)) {
      // dragged to semester column
      let semester = semesters.filter(
        (semester) => semester.name == destColumn
      )[0];
      let course = courses.filter(
        (course) => course.course_courseId == courseId
      )[0];
      // add to semester
      semester["courses"].push(course);
      //remove from course
      let tmpCourses = [...courses].filter(
        (course) => course.course_courseId != courseId
      );
      this.setState((courses = tmpCourses));
    }
  }

  render() {
    let { courses, semesters, prerequisite } = this.state;

    return (
      <DragDropContext onDragEnd={(result) => this.onDragEnd(result)}>
        <div className="w-75 bg-dark m-auto p-5">
          <div className="row">
            <div className="col-8">
              {semesters.map((semester) => {
                return <Semester key={semester.id} semester={semester} />;
              })}
            </div>
            <div className="col-4">
              <Prerequisites prerequisite={prerequisite} courses={courses} />
            </div>
          </div>
        </div>
      </DragDropContext>
    );
  }
}

export default App;

// import React, { useState } from "react";
// import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
// import uuid from "uuid/v4";

// const itemsFromBackend = [
//   { id: uuid(), content: "First task" },
//   { id: uuid(), content: "Second task" },
//   { id: uuid(), content: "Third task" },
//   { id: uuid(), content: "Fourth task" },
//   { id: uuid(), content: "Fifth task" }
// ];

// const columnsFromBackend = {
//   [uuid()]: {
//     name: "Requested",
//     items: itemsFromBackend
//   },
//   [uuid()]: {
//     name: "To do",
//     items: []
//   },
//   [uuid()]: {
//     name: "In Progress",
//     items: []
//   },
//   [uuid()]: {
//     name: "Done",
//     items: []
//   }
// };

// const onDragEnd = (result, columns, setColumns) => {
//   if (!result.destination) return;
//   const { source, destination } = result;

//   if (source.droppableId !== destination.droppableId) {
//     const sourceColumn = columns[source.droppableId];
//     const destColumn = columns[destination.droppableId];
//     const sourceItems = [...sourceColumn.items];
//     const destItems = [...destColumn.items];
//     const [removed] = sourceItems.splice(source.index, 1);
//     destItems.splice(destination.index, 0, removed);
//     setColumns({
//       ...columns,
//       [source.droppableId]: {
//         ...sourceColumn,
//         items: sourceItems,
//       },
//       [destination.droppableId]: {
//         ...destColumn,
//         items: destItems,
//       },
//     });
//   } else {
//     const column = columns[source.droppableId];
//     const copiedItems = [...column.items];
//     const [removed] = copiedItems.splice(source.index, 1);
//     copiedItems.splice(destination.index, 0, removed);
//     setColumns({
//       ...columns,
//       [source.droppableId]: {
//         ...column,
//         items: copiedItems,
//       },
//     });
//   }
// };

// function App() {
//   const [columns, setColumns] = useState(columnsFromBackend);
//   return (
//     <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
//       <DragDropContext
//         onDragEnd={result => onDragEnd(result, columns, setColumns)}
//       >
//         {Object.entries(columns).map(([columnId, column], index) => {
//           return (
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center"
//               }}
//               key={columnId}
//             >
//               <h2>{column.name}</h2>
//               <div style={{ margin: 8 }}>
//                 <Droppable droppableId={columnId} key={columnId}>
//                   {(provided, snapshot) => {
//                     return (
//                       <div
//                         {...provided.droppableProps}
//                         ref={provided.innerRef}
//                         style={{
//                           background: snapshot.isDraggingOver
//                             ? "lightblue"
//                             : "lightgrey",
//                           padding: 4,
//                           width: 250,
//                           minHeight: 500
//                         }}
//                       >
//                         {column.items.map((item, index) => {
//                           return (
//                             <Draggable
//                               key={item.id}
//                               draggableId={item.id}
//                               index={index}
//                             >
//                               {(provided, snapshot) => {
//                                 return (
//                                   <div
//                                     ref={provided.innerRef}
//                                     {...provided.draggableProps}
//                                     {...provided.dragHandleProps}
//                                     style={{
//                                       userSelect: "none",
//                                       padding: 16,
//                                       margin: "0 0 8px 0",
//                                       minHeight: "50px",
//                                       backgroundColor: snapshot.isDragging
//                                         ? "#263B4A"
//                                         : "#456C86",
//                                       color: "white",
//                                       ...provided.draggableProps.style
//                                     }}
//                                   >
//                                     {item.content}
//                                   </div>
//                                 );
//                               }}
//                             </Draggable>
//                           );
//                         })}
//                         {provided.placeholder}
//                       </div>
//                     );
//                   }}
//                 </Droppable>
//               </div>
//             </div>
//           );
//         })}
//       </DragDropContext>
//     </div>
//   );
// }
