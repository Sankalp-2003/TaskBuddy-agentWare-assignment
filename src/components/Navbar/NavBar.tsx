import { FaClipboardList } from "react-icons/fa";
import "../../styles/navBar.scss";
import { CiKeyboard, CiViewList } from "react-icons/ci";
import Button from "../UI/Button";
import { RiLogoutBoxLine } from "react-icons/ri";
import FilterBar from "../Filters/FilterBar";
import SearchBar from "../Filters/SearchBar";
import { Link, useLocation } from "react-router-dom";

type NavBarProps = {
  setCreateTask: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavBar: React.FC<NavBarProps> = ({ setCreateTask }) => {
  const location = useLocation();
  return (
    <div className="navbar">
      <div className="top">
        <div className="left">
          <h4>
            <FaClipboardList className="icon" /> TaskBuddy
          </h4>
          <div className="links">
            <Link to="/">
              <p className={location.pathname === "/" ? "active-link" : ""}>
                <CiViewList /> List
              </p>
            </Link>
            <Link to="board">
              <p
                className={location.pathname === "/board" ? "active-link" : ""}
              >
                <CiKeyboard /> Board
              </p>
            </Link>
          </div>
        </div>
        <div className="right">
          <div className="profile">
            <div className="dp">
              <img
                src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="DP"
              />
            </div>
            <p>aravind</p>
          </div>
          <Button
            icon={<RiLogoutBoxLine />}
            text={"Logout"}
            onClick={() => {}}
            className={"logout-btn"}
          />
        </div>
      </div>
      <div className="bottom">
        <FilterBar />
        <div className="right">
          <SearchBar />
          <Button
            icon={""}
            text={"ADD TASK"}
            onClick={() => {
              setCreateTask(true);
            }}
            className={"addTask-btn"}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
