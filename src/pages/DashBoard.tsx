import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import "../styles/dashBoard.scss";
import { useState } from "react";
import CreateTask from "../components/createTask/CreateTask";
import EditTask from "../components/editTask/EditTask";

type DashBoardProps = {
  editTask: boolean;
  setEditTask: React.Dispatch<React.SetStateAction<boolean>>;
};

const DashBoard: React.FC<DashBoardProps> = () => {
  const [createTask, setCreateTask] = useState(false);

  return (
    <div className="dashBoard">
      <NavBar setCreateTask={setCreateTask} />
      <Outlet />
      {createTask && <CreateTask setCreateTask={setCreateTask} />}
      {true && <EditTask />}
    </div>
  );
};

export default DashBoard;
