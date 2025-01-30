import { RxDragHandleDots2 } from "react-icons/rx";
import "../../styles/taskItem.scss";
import { FaCheckCircle } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

type TaskItemProps = {
  type: string;
};

const TaskItem: React.FC<TaskItemProps> = ({ type }) => {
  return (
    <div className="taskItems">
      <div className="task__title">
        <input type="checkbox" />
        <RxDragHandleDots2 />
        <FaCheckCircle
          style={{ color: type === "Completed" ? "green" : "gray" }}
        />
        <p className="title">
          {"Design a Dashboard page along with wireframes".length < 45
            ? "Design a Dashboard page along with wireframes"
            : "Design a Dashboard page along with wireframes".slice(0, 42) +
              "..."}
        </p>
      </div>
      <p className="due-date">30 Dec, 2025</p>
      <div className="task__status">
        <p>{type}</p>
        <select name="task_status">
          <option hidden></option>
          <option value="to-do">TO-Do</option>
          <option value="progress">PROGRESS</option>
          <option value="completed">COMPLETED</option>
        </select>
      </div>
      <p className="task__category">Work</p>
      <div className="more__options">
        <select name="edit">
          <option hidden></option>
          <option value="Edit">
            <p className="opt">Edit</p>
          </option>
          <option value="Edit">
            <p className="opt">Delete</p>
          </option>
        </select>
        <BsThreeDots />
      </div>
    </div>
  );
};

export default TaskItem;
