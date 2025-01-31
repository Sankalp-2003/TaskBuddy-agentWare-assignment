import "../../styles/taskBoard.scss";
import TaskBoardCategory from "./TaskBoardCategory";

const TaskBoard = () => {
  return (
    <div className="taskboard">
      <TaskBoardCategory type={"To-Do"} />
      <TaskBoardCategory type={"Progress"} />
      <TaskBoardCategory type={"Completed"} />
    </div>
  );
};

export default TaskBoard;
