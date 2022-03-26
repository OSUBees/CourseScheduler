import Semester from "./Semester.js";
import classes from "./SemesterList.module.css";

const SemesterList = () => {
  return (
    <div>
      <ul className={classes.list}>
        <li>
          <Semester />;
        </li>
        <li>
          <Semester />;
        </li>
        <li>
          <Semester />;
        </li>
        <li>
          <Semester />;
        </li>
      </ul>
    </div>
  );
};

export default SemesterList;
