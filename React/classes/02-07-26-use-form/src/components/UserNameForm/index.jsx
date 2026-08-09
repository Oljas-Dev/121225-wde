import { useForm } from "react-hook-form";

function UserNameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const registerNewUser = (userData) => {
    console.log("Registered user:", userData.username);
  };

  return (
    <form onSubmit={handleSubmit(registerNewUser)}>
      <input
        type="text"
        {...register("username", {
          minLength: {
            value: 4,
            message: "Username should contain minimum 4 symbols",
          },
          maxLength: {
            value: 12,
            message: "Username should contain maximum 12 symbols",
          },
        })}
      />

      {errors.username && <p>{errors.username.message}</p>}

      <button type="submit">register</button>
    </form>
  );
}

export default UserNameForm;
