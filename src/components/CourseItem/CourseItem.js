import Card from "../UI/Card.js";
import classes from "./CourseItem.module.css";

const CourseItem = (props) => {
  return (
    <li>
      <Card>
        <h3>{props.name}</h3>
        <div className={classes.credit}>{props.credit}</div>
      </Card>
    </li>
  );
};

export default CourseItem;
