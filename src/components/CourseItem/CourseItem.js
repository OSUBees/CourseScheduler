import  "./CourseItem.module.css";

const CourseItem = (props) => {
  return (
    <div
      className=" rounded-3 mx-auto my-2 w-100 px-5 py-5 d-flex flex-column bg-primary text-white"
      
    >
      <div className=".course">
        <h3 className="text-center">{props.name}</h3>
        <p className="text-center">Credit: {props.credit}</p>
      </div>
    </div>
  );
};

export default CourseItem;
