import styles from "./styles.module.css";

import { useForm } from "react-hook-form";

function RegistrationForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isSubmitting, isValid },
  } = useForm({
    mode: "onBlur",
  });

  const email = watch("email");

  const registerUser = (data) => {
    console.log(data);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit(registerUser)}>
      <div>
        <label htmlFor="username">User name</label>
        <input
          type="text"
          {...register("username", {
            required: {
              value: true,
              message: "User name is required!",
            },
            maxLength: {
              value: 26,
              message: "User name should not be more than 26 letters",
            },
            minLength: {
              value: 2,
              message: "User name should have at least 2 letters",
            },
            pattern: {
              value: /^[A-Z][a-z]{1,25}$/g,
            },
          })}
        />

        {errors.username && (
          <p style={{ color: "red" }}>{errors.username.message}</p>
        )}

        <label htmlFor="lastname">Last name</label>
        <input
          type="text"
          {...register("lastname", {
            required: {
              value: true,
              message: "Last name is required",
            },
          })}
        />

        {errors.lastname && (
          <p style={{ color: "red" }}>{errors.lastname.message}</p>
        )}

        <label htmlFor="email">Email</label>
        <input
          type="text"
          {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
          })}
        />
      </div>

      <button type="submit" disabled={!isValid || isSubmitting}>
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;
