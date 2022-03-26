import CourseCard from "../UI/CourseCard.js";
import classes from "./CourseItem.module.css";

const CourseItem = (props) => {
  return (
    <li className={classes.course}>
      <CourseCard>
        <div className="classes.course">
          <h3 className={classes.name}>{props.name}</h3>
          <div className={classes.credit}>credit:{props.credit}</div>
        </div>
      </CourseCard>
    </li>
  );
};

export default CourseItem;
