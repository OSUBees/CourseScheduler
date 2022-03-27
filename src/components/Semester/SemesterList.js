import Semester from "./Semester.js";
import classes from "./SemesterList.module.css";

const SemesterList = () => {
  return (
    <div className="w-55 overflow-scroll h-100 d-flex ">
      
      <Semester className="mx-2 h-90 d-flex bg-secondary flex-wrap" />
      <Semester className="mx-2 h-90 d-flex bg-secondary flex-wrap"/>
      <Semester className="mx-2  -90 d-flex bg-secondary flex-wrap"/>
       
    </div>
  );
};

export default SemesterList;
