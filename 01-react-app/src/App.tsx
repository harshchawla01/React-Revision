import { BsFillCalendar2Fill } from "react-icons/bs";
import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Button from "./Button";
import ListGroup from "./components/ListGroup";
// import ListGroupWithProps from "./components/ListGroupWithProps/ListGroupWithProps";
import ListGroupWithProps from "./components/ListGroupWithProps"; // If the file name is index.ts, then we can directly import the folder name. It will automatically look for the index.ts file inside the folder

function App() {
  const [alertVisibility, setAlertVisibility] = useState(false);
  const [buttonColor, setButtonColor] = useState<
    "primary" | "secondary" | "danger" | "success"
  >("primary");

  debugger;

  let items = ["Ghaziabad", "Hyderabad", "Bangalore", "Mumbai", "Pune"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <BsFillCalendar2Fill />
      {/* <Alert text="Hello ji" /> */}
      {/* Above way is ugly if the text is very big */}
      {alertVisibility && (
        <Alert onClose={() => setAlertVisibility(false)}>My custom alert</Alert>
      )}
      <Button
        color={buttonColor}
        // problematic approach
        // onClick={() => {
        //   setAlertVisibility(!alertVisibility);
        //   alertVisibility === false // This is a very crucial problem. Here the setAlertVisibility is an async operation and the value of alertVisibility is not updated yet. So it will read the old value false on the first click and the button will become red
        //     ? setButtonColor("danger")
        //     : setButtonColor("primary");
        // }}

        // Correct approach
        onClick={() => {
          setAlertVisibility((prev) => !prev);
          setButtonColor((prevColor) =>
            prevColor === "primary" ? "danger" : "primary"
          );
        }}
      >
        Mera button
      </Button>
    </>
  );

  // return (
  //   <div>
  //     <ListGroupWithProps
  //       items={items}
  //       heading="Cities"
  //       onSelectItem={handleSelectItem}
  //     />
  //     <ListGroup />
  //     {/* <ListGroup /> */}
  //     {/* Both ListGroups are not related to each other in terms of state management. Change of state of one doesn't affect the change of state of other */}
  //   </div>
  // );
}

export default App;
