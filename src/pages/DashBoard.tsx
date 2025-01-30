import NavBar from "../components/Navbar/NavBar";
import TaskList from "../components/Tasks/TaskList";
import "../styles/dashBoard.scss";

const DashBoard = () => {
  return (
    <div className="dashBoard">
      <NavBar />
      <TaskList />
    </div>
  );
};

export default DashBoard;
