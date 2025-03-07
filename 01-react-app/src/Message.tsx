// PascalCasing
function Message() {
  const name = "Harsh";

  // JSX - Javascript xml
  if (name) return <h1>Hello {name}</h1>;
  else return <h1>Hello World</h1>;
  // We can write js expression in curly braces
  // eg, return <h1>Hello {getName()}</h1>;
}

export default Message;
