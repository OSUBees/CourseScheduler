import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Prerequisites from "./components/ClassInfo/Prerequisites.js";
import SemesterList from "./components/Semester/SemesterList.js";

function App() {
  return (
    
    <div className=" d-inline-flex bg-dark  mb-0 p-5">
        
        <div className="d-inline-block overflow-scroll h-80 col-8">
          <SemesterList />
        </div>
        <div className="d-inline-block h-80 col-2">
          <Prerequisites />
          </div>
        
      </div>
  );
}
export default App;
