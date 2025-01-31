import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashBoard from "./pages/DashBoard";
import TaskList from "./components/Tasks/TaskList";
import TaskBoard from "./components/Tasks/TaskBoard";
import { useState } from "react";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route path="/" element={<DashBoard />}>
          <Route index element={<TaskList />} />
          <Route path="board" element={<TaskBoard />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
