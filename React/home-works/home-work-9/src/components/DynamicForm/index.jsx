import { useForm } from "react-hook-form";
import styles from "./styles.module.css";

function DynamicForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  function submit(data) {
    console.log(data);
    reset();
  }
  return (
    <form onSubmit={handleSubmit(submit)} className={styles.container}>
      <div className={styles.inputRow}>
        <label>First Field</label>
        <input
          type="text"
          {...register("firstField", {
            required: {
              value: true,
              message: "This field is required",
            },
          })}
        />
        {errors?.firstField?.message && <p>{errors?.firstField?.message}</p>}
      </div>
      {isValid && (
        <div className={styles.inputRow}>
          <label>Second Field</label>
          <input type="text" {...register("secondField")} />
        </div>
      )}
      <button type="submot">Submit</button>
    </form>
  );
}

export default DynamicForm;
