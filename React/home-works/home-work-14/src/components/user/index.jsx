import { useSelector } from "react-redux";

function User() {
  const name = useSelector((state) => state.name);
  const status = useSelector((state) => state.status);

  return (
    <div>
      <h2>User Information</h2>

      <p>
        <strong>Name:</strong> {name}
      </p>

      <p>
        <strong>Status:</strong> {status}
      </p>
    </div>
  );
}

export default User;
