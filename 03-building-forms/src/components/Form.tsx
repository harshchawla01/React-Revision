import { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

// It is not necessary to define but by default compiler is not aware of out input fields if you want your from data to be shown in intelliSense, you can define an interface
interface FormData {
  name: string;
  age: number;
}

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>(); // nested destructuring
  console.log(register("name")); // uses reference object so no rerendering is involved here
  console.log(errors);

  const onSubmit = (data: FieldValues) => console.log("Data ", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* div.mb-3>label.form-label+input.form-control */}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">The name field is required.</p>
        )}
        {/* Optional chaining: '?' here signifies that it will check this condition only if errors has the property name */}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">
            The name must have a minimum length of 3
          </p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
