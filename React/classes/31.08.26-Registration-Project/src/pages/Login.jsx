import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //   const [formError, setFormError] = useState("");

  const dispath = useDispatch();
  const navigate = useNavigate();
  const { token, isLoading, isError, message } = useSelector(
    (state) => state.auth,
  );

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispath(login(formData));
  }

  useEffect(() => {
    if (token) {
      navigate("/profile");
    }
  }, [token, navigate]);

  return (
    <main>
      <section>
        <h1>Sign in with Email and Password</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="login-email">Email:</label>
          <input
            id="login-email"
            type="email"
            placeholder="enter your email"
            value={formData.email}
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="login-password">Password:</label>
          <input
            id="login-password"
            type="password"
            placeholder="enter your password"
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit">sign in</button>
        </form>
      </section>
    </main>
  );
}

export default Login;
