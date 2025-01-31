import { useEffect, useState } from "react";
import TaskCategoryItem from "./TaskCategoryItem";

type TaskBoardCategoryProps = {
  type: string;
};
const TaskBoardCategory: React.FC<TaskBoardCategoryProps> = ({ type }) => {
  const [titleColor, setTitleColor] = useState("");
  const [emptyMsg, setEmptyMsg] = useState(false);
  useEffect(() => {
    if (type === "To-Do") {
      setTitleColor("#FAC3FF");
    } else if (type === "Progress") {
      setTitleColor("#85D9F1");
    } else {
      setTitleColor("#A2D6A0");
    }
  }, []);
  return (
    <div className="taskBoardCategory">
      <p className="board__title" style={{ backgroundColor: titleColor }}>
        {type}
      </p>
      {emptyMsg ? (
        <div className="empty__msg">No Tasks In {type}</div>
      ) : (
        <TaskCategoryItem />
      )}
    </div>
  );
};

export default TaskBoardCategory;
