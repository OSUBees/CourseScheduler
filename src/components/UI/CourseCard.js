import classes from "./CourseCard.module.css";

const CourseCard = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};
export default CourseCard;
