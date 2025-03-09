import { useState } from "react";
import Message from "./components/Message";

const App = () => {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const [tags, setTags] = useState(["happy", "sad", "angry"]);

  const handleClick = () => {
    // drink.price = 6; // This will not re-render the component because the state is object and it is not updated
    // setDrink(drink);
    // If your state is an object or an array, you should not mutate it directly, because that won't re-render the component
    setDrink({ ...drink, price: ++drink.price }); // This will re-render the component because the state is updated with a new object

    // Add
    setTags([...tags, "cheerful"]);

    // Remove
    setTags(tags.filter((tag) => tag !== "sad"));

    // Update
    setTags(tags.map((tag) => (tag === "happy" ? "joyful" : tag)));

    // Above called setTags function won't reflect all the changes due to state batching. So, we can use the below syntax to update the state
    // Combine all tags updates in one functional update
    setTags((prevTags) => {
      // Add "cheerful"
      let newTags = [...prevTags, "cheerful"];
      // Remove "sad"
      newTags = newTags.filter((tag) => tag !== "sad");
      // Update "happy" to "joyful"
      newTags = newTags.map((tag) => (tag === "happy" ? "joyful" : tag));
      return newTags;
    });
  };

  return (
    <div>
      <h2>{drink.price}</h2>
      <ul>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Button</button>
    </div>
  );
};

export default App;
