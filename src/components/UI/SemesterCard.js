import classes from "./SemesterCard.module.css";

const SemesterCard = (props) => {
  return <div className={classes.card + " w-25"}>{props.children}</div>;
};
export default SemesterCard;
