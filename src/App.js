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
        id: "semester1",
        name: "Semester 1",
        courses: [],
      },
      {
        id: "semester2",
        name: "Semester 2",
        courses: [],
      },
      {
        id: "semester3",
        name: "Semester 3",
        courses: [],
      },
      {
        id: "semester4",
        name: "Semester 4",
        courses: [],
      },
      {
        id: "semester5",
        name: "Semester 5",
        courses: [],
      },
      {
        id: "semester6",
        name: "Semester 6",
        courses: [],
      },
      {
        id: "semester7",
        name: "Semester 7",
        courses: [],
      },
      {
        id: "semester8",
        name: "Semester 8",
        courses: [],
      },
    ],
    prerequisite: {
      id: 1,
      name: "Prereq Column",
    },
  };
  // getSemesters() {
  //   const dbRef = ref(getDatabase(), "semesters");
  //   onValue(dbRef, (snapshot) => {
  //     this.setState({ semesters: snapshot.val() });
  //   });
  // }
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
    // this.getSemesters();
  }

  onDragEnd(result) {
    // nothing will happen if card is dropped outside
    if (!result.destination) return;
    let { courses, semesters } = this.state;
    const { source, destination } = result;
    const courseId = result.draggableId;
    const sourceColumn = source.droppableId;
    const destColumn = destination.droppableId;

    if (destColumn.match(/semester1/)) {
      // dragged to semester column
      let semester = semesters.filter(
        (semester) => semester.id == destColumn
      )[0];
      let course = courses.filter(
        (course) => course.course_courseId == courseId
      )[0];
      // add to semester
      semester["courses"].push(course);
      //remove from course
      this.setState({
        courses: courses.filter((course) => course.course_courseId != courseId),
      });
    } else if (destColumn.match(/semester2/)) {
      // dragged to semester column
      let semester = semesters.filter(
        (semester) => semester.id == destColumn
      )[0];
      let course = courses.filter(
        (course) => course.course_courseId == courseId
      )[0];
      // add to semester
      semester["courses"].push(course);
      //remove from course
      this.setState({
        courses: courses.filter((course) => course.course_courseId != courseId),
      });
    } else if (destColumn.match(/semester3/)) {
      // dragged to semester column
      let semester = semesters.filter(
        (semester) => semester.id == destColumn
      )[0];
      let course = courses.filter(
        (course) => course.course_courseId == courseId
      )[0];
      // add to semester
      semester["courses"].push(course);
      //remove from course
      this.setState({
        courses: courses.filter((course) => course.course_courseId != courseId),
      });
    } else if (destColumn.match(/semester4/)) {
      // dragged to semester column
      let semester = semesters.filter(
        (semester) => semester.id == destColumn
      )[0];
      let course = courses.filter(
        (course) => course.course_courseId == courseId
      )[0];
      // add to semester
      semester["courses"].push(course);
      //remove from course
      this.setState({
        courses: courses.filter((course) => course.course_courseId != courseId),
      });
    } else if (destColumn.match(/semester5/)) {
      // dragged to semester column
      let semester = semesters.filter(
        (semester) => semester.id == destColumn
      )[0];
      let course = courses.filter(
        (course) => course.course_courseId == courseId
      )[0];
      // add to semester
      semester["courses"].push(course);
      //remove from course
      this.setState({
        courses: courses.filter((course) => course.course_courseId != courseId),
      });
    } else if (destColumn.match(/semester6/)) {
      // dragged to semester column
      let semester = semesters.filter(
        (semester) => semester.id == destColumn
      )[0];
      let course = courses.filter(
        (course) => course.course_courseId == courseId
      )[0];
      // add to semester
      semester["courses"].push(course);
      //remove from course
      this.setState({
        courses: courses.filter((course) => course.course_courseId != courseId),
      });
    } else if (destColumn.match(/semester7/)) {
      // dragged to semester column
      let semester = semesters.filter(
        (semester) => semester.id == destColumn
      )[0];
      let course = courses.filter(
        (course) => course.course_courseId == courseId
      )[0];
      // add to semester
      semester["courses"].push(course);
      //remove from course
      this.setState({
        courses: courses.filter((course) => course.course_courseId != courseId),
      });
    } else if (destColumn.match(/semester8/)) {
      // dragged to semester column
      let semester = semesters.filter(
        (semester) => semester.id == destColumn
      )[0];
      let course = courses.filter(
        (course) => course.course_courseId == courseId
      )[0];
      // add to semester
      semester["courses"].push(course);
      //remove from course
      this.setState({
        courses: courses.filter((course) => course.course_courseId != courseId),
      });
    } else if (destColumn.match(/Prereq Column/)) {
      let semester = semesters.filter(
        (semester) => semester.id === sourceColumn
      )[0];
      let course = semester["courses"].filter(
        (course) => course.course_courseId === courseId
      )[0];
      let leftOver = semester["courses"].filter(
        (course) => course.course_courseId !== courseId
      );
      semester["courses"] = leftOver;
      // remove from semester
      this.setState({
        semesters: semesters,
      });
      //add back to course
      courses.push(course);
    }
  }

  render() {
    let { courses, semesters, prerequisite } = this.state;

    for (let i = 0; i < semesters.length; i++) {
      console.log(semesters);
      let semesterCourses = semesters[i].courses;
      let totalCredit = 0;
      for (let j = 0; j < semesterCourses.length; j++) {
        totalCredit =
          totalCredit + parseInt(semesterCourses[j].course_credit_hours);
      }
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
