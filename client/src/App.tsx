import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import UserContextProvider from "./features/auth/authSlice";
import UserProfile from "./pages/UserProfile";
("");
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import PrivateRoute from "./pages/PrivateRoute";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserContextProvider>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<Homepage />} />
              <Route element={<PrivateRoute />}>
                <Route path="/blog" element={<Blog />} />
                <Route path="/about" element={<About />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" index element={<UserProfile />} />
              </Route>
            </Routes>
          </div>
        </UserContextProvider>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
