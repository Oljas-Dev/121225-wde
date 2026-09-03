import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/register/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { logout } from "./features/auth/authSlice";

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (!token) return undefined;
    const { exp } = jwtDecode(token);

    const timeLeft = exp * 1000 - Date.now();

    if (timeLeft <= 0) {
      dispatch(logout());
      return undefined;
    }

    const timer = setTimeout(() => dispatch(logout()), timeLeft);

    return () => clearTimeout(timer);
  }, [token, dispatch]);

  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Main Page</NavLink>
          {!token && <NavLink to="/login">Login</NavLink>}
          {!token && <NavLink to="/register">Register</NavLink>}
          {token && <NavLink to="/profile">Profile</NavLink>}
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
