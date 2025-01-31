import { IoIosArrowUp } from "react-icons/io";
import "../../styles/taskCategory.scss";
import { FiPlus } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import Button from "../UI/Button";
import TaskItem from "./TaskItem";

type TaskCategoryProp = {
  type: string;
};

const TaskCategory: React.FC<TaskCategoryProp> = ({ type }) => {
  const [bgColor, setBgColor] = useState("#FAC3FF");
  const [noTask, setNoTask] = useState(false);
  const dateInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [addOption, setAddOption] = useState(false);
  const [displayItems, setDisplayItems] = useState(true);

  useEffect(() => {
    if (type === "To-Do") {
      setBgColor("#FAC3FF");
    } else if (type === "Progress") {
      setBgColor("#85D9F1");
    } else {
      setBgColor("#CEFFCC");
    }
  }, []);
  const toggleEmptyMsg = () => {
    setNoTask((prev) => !prev);
  };
  const toggleAddOption = () => {
    setAddOption((prev) => !prev);
  };
  const toggleDisplayItems = () => {
    setDisplayItems((prev) => !prev);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="taskCategory">
      <div
        style={{ backgroundColor: bgColor }}
        onClick={() => {
          toggleEmptyMsg();
          toggleDisplayItems();
        }}
        className="taskCategory__head"
      >
        <p>{type} (3)</p>
        <p
          style={{
            rotate: noTask ? "0deg" : "180deg",
            transition: "rotate 0.3s ease",
          }}
        >
          <IoIosArrowUp />
        </p>
      </div>
      <div className="taskCategory__body">
        {type === "To-Do" && (
          <div className="addTask__option">
            <p onClick={toggleAddOption}>
              <FiPlus /> ADD TASK
            </p>
            <div
              className="addTask__option__form"
              style={{ display: addOption ? "block" : "none" }}
            >
              <form>
                <input
                  type="text"
                  className="taskTitle"
                  placeholder="Task Title"
                />
                <div
                  className="custom-date-picker"
                  onClick={() => dateInputRef.current?.showPicker()}
                >
                  {selectedDate ? (
                    <p>{selectedDate}</p>
                  ) : (
                    <p>
                      <FaRegCalendarAlt
                        style={{ margin: "unset", marginRight: "10px" }}
                      />{" "}
                      Add date
                    </p>
                  )}
                  <input
                    type="date"
                    ref={dateInputRef}
                    onChange={handleDateChange}
                    className="hidden-date-input"
                  />
                </div>
                <select name="task-status">
                  <option hidden>+</option>
                  <option value="to-do">TO-DO</option>
                  <option value="in-progress">IN-PROGRESS</option>
                  <option value="completed">Completed</option>
                </select>
                <select name="task-category">
                  <option hidden>+</option>
                  <option value="work">WORK</option>
                  <option value="personal">PERSONAL</option>
                </select>
              </form>
              <div className="addTask__option__bottom">
                <Button
                  icon={""}
                  text={"ADD"}
                  onClick={() => {}}
                  className={"add-btn"}
                />
                <Button
                  icon={""}
                  text={"CANCEL"}
                  onClick={() => toggleAddOption()}
                  className={"cancel-btn"}
                />
              </div>
            </div>
          </div>
        )}
        {type !== "Completed" && noTask ? (
          <div
            className="no__tasks"
            style={{ height: `${type === "To-Do" ? "200px" : "100px"}` }}
          >
            <p>No tasks in {type}</p>
          </div>
        ) : null}
        {displayItems && <TaskItem type={type} />}
      </div>
    </div>
  );
};

export default TaskCategory;
