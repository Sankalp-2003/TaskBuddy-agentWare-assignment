import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashBoard from "./pages/DashBoard";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashBoard />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
