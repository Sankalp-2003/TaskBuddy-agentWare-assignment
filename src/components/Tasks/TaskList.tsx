import "../../styles/taskList.scss";
import TaskCategory from "./TaskCategory";

const TaskList = () => {
  return (
    <div className="taskList">
      <div className="head">
        <p>Task Name</p>
        <p>Due on</p>
        <p>Task Status</p>
        <p>Task Category</p>
      </div>
      <TaskCategory type={"To-Do"} />
      <TaskCategory type={"Process"} />
      <TaskCategory type={"Completed"} />
    </div>
  );
};

export default TaskList;
