import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ProtectedRoutes from "./components/security/ProtectedRoutes";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/DashboardPage/Home";
import Room from "./pages/DashboardPage/Room";
import Profile from "./pages/DashboardPage/Profile";

const App = () => {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/*"
            element={
              <ProtectedRoutes>
                <Dashboard />
              </ProtectedRoutes>
            }
          >
            <Route index element={<Navigate to="home" replace />} />
            <Route path="home" element={<Home />} />
            <Route path="room" element={<Room />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
