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
import Dashboard from "./Layout/Dashboard";
import Home from "./pages/Home";
import Room from "./pages/Room";
import Profile from "./pages/Profile";
import Quizz from "./pages/quizz/Quizz";
import SoloQuizz from "./pages/quizz/solo/SoloQuizz";
import MultijoueurQuizz from "./pages/quizz/multijoueur/MultijoueurQuizz";
import CreateGame from "./pages/quizz/multijoueur/CreateGame";
import JoinGame from "./pages/quizz/multijoueur/JoinGame";

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
            <Route path="game" element={<Room />} />
            <Route path="game/quiz" element={<Quizz />} />
            <Route path="game/quiz/solo" element={<SoloQuizz />} />
            <Route
              path="game/quiz/multijoueur"
              element={<MultijoueurQuizz />}
            />
            <Route
              path="game/quiz/multijoueur/create"
              element={<CreateGame />}
            />
            <Route path="game/quiz/multijoueur/join" element={<JoinGame />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
