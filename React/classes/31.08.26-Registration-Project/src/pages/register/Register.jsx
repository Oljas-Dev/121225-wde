import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { register, resetState } from "../../features/auth/authSlice";

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formError, setFormError] = useState("");

  const dispath = useDispatch();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setFormError("Passwords do not match");
      return;
    }

    dispath(register(formData));
  }

  useEffect(() => {
    dispath(resetState());
  }, []);

  return (
    <main>
      <section>
        <p>New account</p>
        <h1>Create account with Email and Password</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="register-email">Email:</label>
          <input
            id="register-email"
            type="email"
            placeholder="enter your email"
            value={formData.email}
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="register-password">Password:</label>
          <input
            id="register-password"
            type="password"
            placeholder="enter your password"
            value={formData.password}
            onChange={handleChange}
          />

          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            id="confirm-password"
            type="confirmPassword"
            placeholder="confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <button type="submit">register</button>
        </form>
      </section>
    </main>
  );
}

export default Register;
