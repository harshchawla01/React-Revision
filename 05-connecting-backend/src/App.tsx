import { useEffect, useRef, useState } from "react";

const connect = () => console.log("Connecting");
const disconnect = () => console.log("Disconnecting");

const App = () => {
  useEffect(() => {
    connect(); // connecting / subscribing / showing modal

    // Did whatever we want

    return () => disconnect(); // disconnecting / unsubscribing / hiding modal
    // We know react renders our component twice in strict mode. Before rendering the second time. It will first unmount your component from the screen (basically the disconnect thing that we are doing here)
  });

  return <div></div>;
};

export default App;
