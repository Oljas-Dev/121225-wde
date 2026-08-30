import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../redux/actions";

function UserForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim() || !status.trim()) {
      return;
    }

    dispatch(setUserInfo(name, status));

    setName("");
    setStatus("");
  };

  return (
    <form onSubmit={handleSubmit} className="formGroup">
      <div>
        <label htmlFor="name">Name</label>

        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label htmlFor="status">Status</label>

        <input
          id="status"
          type="text"
          value={status}
          onChange={(event) => setStatus(event.target.value)}
          placeholder="Enter your status"
        />
      </div>

      <button type="submit">Update user</button>
    </form>
  );
}

export default UserForm;
