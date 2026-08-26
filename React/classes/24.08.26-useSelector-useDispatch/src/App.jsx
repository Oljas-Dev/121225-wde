import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./redux/slices/counterSlice";
import { useState } from "react";
import { setUser, clearUser } from "./redux/slices/userSlice";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const userData = useSelector((state) => state.user.data);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(setUser({ id: Math.random(), name, email }));
  }

  function resetUser() {
    dispatch(clearUser());
    setEmail("");
    setName("");
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>plus one</button>
      <button onClick={() => dispatch(decrement())}>minus one</button>
      <button onClick={() => dispatch(reset())}>reset</button>

      <form
        onSubmit={handleSubmit}
        style={{
          margin: 40,
          padding: 20,
          border: "2px solid green",
          display: "flex",
          flexDirection: "column",
          gap: 15,
        }}
      >
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button type="submit">Set User</button>
        <button type="reset" onClick={resetUser}>
          Clear User
        </button>
      </form>
      <div>
        <p>User ID: {userData.id}</p>
        <p>User Name: {userData.name}</p>
        <p>User email: {userData.email}</p>
      </div>
    </div>
  );
}

export default App;
