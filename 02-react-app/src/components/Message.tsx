let count = 0; // Makes the component impure

const Message = () => {
  console.log("Message rendered", count);

  //   let count = 0;
  return <div>Message {++count}</div>;
};

export default Message;
