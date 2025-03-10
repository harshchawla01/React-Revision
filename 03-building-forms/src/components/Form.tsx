import { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }), // We can always pass a custom message if we don't want to use the default one
  age: z
    .number({ invalid_type_error: "Age field is required" })
    .min(18, { message: "Age must be at least 18 years old" }),
  // As there are multiple checks for single field, we can pass different error messages for each check
}); // Passing configuration object (that represents shape of our form) as arguments to object method of zod

// Removed the interface and using zod schema to validate the form
// This ts type is similar to interface
type FormData = z.infer<typeof schema>; // { name: string; age: number; }

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }, // nested destructuring
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onChange" }); // mode here states that validation should happen on change of input field and not only on submit

  // When using react-hook-form (useForm), you don't need to call event.preventDefault() manually. React Hook Form automatically prevents the default form submission behavior when using its handleSubmit function.
  const onSubmit = (data: FieldValues) => console.log("Data ", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* div.mb-3>label.form-label+input.form-control */}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          //   {...register("name", { required: true, minLength: 3 })}
          {...register("name")} // Don't mention validation rules here now. They are defined in the schema
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })} // valueAsNumber is used to convert the value to number
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
