import CourseItem from "../CourseItem/CourseItem";
import classes from "./CourseCard.module.css";

const CourseCard = (props) => {
  return (
    <div
      className={
        classes.card +
        " rounded-3 m-2 w-auto p-auto d-inline-flex flex-column bg-primary text-black  d-inline-flex"
      }
    >
     
      { props.children}
    </div>
  );
};

export default CourseCard;
