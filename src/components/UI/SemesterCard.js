import classes from "./SemesterCard.module.css";

const SemesterCard = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};
export default SemesterCard;
