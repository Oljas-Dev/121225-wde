import { useState } from "react";
function EventComponent() {
  const [login, setLogin] = useState("");
  const [username, setUsername] = useState("");
  function handleChange(event) {
    setLogin(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();

    const userData = {
      login: login,
      name: username,
    };
    console.log(userData);
  }
  return (
    <form onSubmit={() => handleSubmit(event)}>
      <input
        type="text"
        value={login}
        onChange={() => handleChange(event)}
        placeholder="Login"
      />
      <input
        type="text"
        value={username}
        onChange={() => setUsername(event.target.value)}
        placeholder="User name"
      />
      <button type="submit">send</button>
    </form>
  );
}
export default EventComponent;
