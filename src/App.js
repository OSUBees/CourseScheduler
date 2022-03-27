import "./App.css";
import React, { Component } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Prerequisites from "./components/ClassInfo/Prerequisites.js";
import SemesterList from "./components/Semester/SemesterList.js";

class App extends Component {
  state = {
    courses: [],
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
            course_credit_hours: "10",
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

  getSemesters() {
    const dbRef = ref(getDatabase(), "semesters");
    onValue(dbRef, (snapshot) => {
      this.setState({ semesters: snapshot.val() });
    });
  }
  getCourses() {
    const dbRef = ref(getDatabase(), "courses");
    onValue(dbRef, (snapshot) => {
      const courses = snapshot.val();
      this.setState({ courses });
    });
  }

  componentDidMount() {
    console.log("mounted");
    this.getCourses();
    this.getSemesters();
  }

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
      let removeCourse = [...courses].filter(
        (course) => course.course_courseId != courseId
      );

      // let remove = this.state.fruits.indexOf(e.target.value);
      this.setState(
        {
          courses: courses.filter(
            (course) => course.course_courseId != courseId
          ),
        },
        () => {
          console.log("course", courses);
        }
      );
    }
  }

  render() {
    let { courses, semesters, prerequisite } = this.state;

    for (let i = 0; i < semesters.length; i++) {
      let semesterCourses = semesters[i].courses;
      // let totalCredit = 0;
      // for (let j = 0; j < semesterCourses.length; j++) {
      //   totalCredit =
      //     totalCredit + parseInt(semesterCourses[j].course_credit_hours);
      // }
      let totalCredit = semesterCourses.reduce(
        (cur, semesterCourse) =>
          cur + parseInt(semesterCourse.course_credit_hours),
        0
      );
      semesters[i]["totalCredit"] = totalCredit;
    }

    return (
      <DragDropContext onDragEnd={(result) => this.onDragEnd(result)}>
        <div
          style={{ height: "100%" }}
          className="d-flex flex-column h-100  mb-0 p-5"
        >
          <div className="d-flex">
            <div className="d-block w-40  overflow-scroll h-80 col-8">
              <SemesterList semesters={semesters} />
            </div>
            <div className="d-flex flex-column  mx-5 h-80 col-3">
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
