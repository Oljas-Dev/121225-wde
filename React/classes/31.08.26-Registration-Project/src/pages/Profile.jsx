import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(logout());
    navigate("/login");
  }
  return (
    <div>
      <h1>Profile</h1>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
}

export default Profile;
