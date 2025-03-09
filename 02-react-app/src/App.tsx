import { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Bob" } });
  };

  return (
    <ExpandableText maxChars={50}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex accusamus
      fugiat ea eius voluptatem? Voluptatum error aliquam obcaecati. Voluptatum,
      nisi eligendi! Iure perferendis repellat minima accusamus eaque.
      Molestias, rem incidunt?
    </ExpandableText>
  );
}

export default App;
