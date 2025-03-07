import { useState } from "react";
import Message from "./components/Message";

const App = () => {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    // drink.price = 6; // This will not re-render the component because the state is object and it is not updated
    // setDrink(drink);
    // If your state is an object or an array, you should not mutate it directly, because that won't re-render the component
    setDrink({ ...drink, price: ++drink.price }); // This will re-render the component because the state is updated with a new object
  };

  return (
    <div>
      <h2>{drink.price}</h2>
      <button onClick={handleClick}>Button</button>
    </div>
  );
};

export default App;
