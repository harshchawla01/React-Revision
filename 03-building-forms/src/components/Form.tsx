import { FormEvent, useRef } from "react";

function Form() {
  const nameRef = useRef<HTMLInputElement>(null); // null sets the 'current' property
  const ageRef = useRef<HTMLInputElement>(null);
  const person = { name: "", age: 0 };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current) {
      // current represents a DOM node
      person.name = nameRef.current.value; // For using this, we require useRef<HTMLInputElement>
      //   console.log(nameRef.current.value);
    }
    if (ageRef.current) {
      person.age = parseInt(ageRef.current.value); // Since age is defined as type=number in the form input
      //   console.log(ageRef.current.value);
    }
    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* div.mb-3>label.form-label+input.form-control */}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input ref={nameRef} id="name" type="text" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input ref={ageRef} id="age" type="number" className="form-control" />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
