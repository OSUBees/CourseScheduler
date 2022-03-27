import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Prerequisites from "./components/ClassInfo/Prerequisites.js";
import SemesterList from "./components/Semester/SemesterList.js";
import Semester from "./components/Semester/Semester";

function App() {
  return (
    <div className="w-75 bg-dark m-auto p-5">
      <div className="row">
        <div className="col-8">
          <Semester />
        </div>
        <div className="col-4">
          <Prerequisites />
        </div>
      </div>
    </div>
  );
}
export default App;
