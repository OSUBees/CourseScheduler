import classes from "./CourseItem.module.css";

const CourseItem = (props) => {
  return (
    <div
      className={
        classes.card +
        " rounded-3 m-2 w-auto px-5 py-3 d-flex flex-column bg-primary text-white  d-inline-flex"
      }
    >
      <div className="classes.course">
        <h3 className={classes.name}>{props.name}</h3>
        <div className={classes.credit}>Credit: {props.credit}</div>
      </div>
    </div>
  );
};

export default CourseItem;
