import { BsThreeDots } from "react-icons/bs";

const TaskCategoryItem = () => {
  return (
    <div className="task__cat__item">
      <div className="top">
        <p className="item__title">Interview with Design Team</p>
        <div className="options">
          <BsThreeDots />
          <select>
            <option hidden></option>
            <option value="edit">Edit</option>
            <option value="delete">Delete</option>
          </select>
        </div>
      </div>
      <div className="bottom">
        <span>Work</span>
        <span>Today</span>
      </div>
    </div>
  );
};

export default TaskCategoryItem;
