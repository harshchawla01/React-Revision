import { useState } from "react";
import { produce } from "immer";

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, description: "Bug 1", fixed: false },
    { id: 2, description: "Bug 2", fixed: false },
  ]);

  const handleClick = () => {
    // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    // OR
    setBugs(
      produce((draft) => {
        // draft is a copy of the bugs array
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  return (
    <div>
      <h1>Bugs</h1>
      <ul>
        {bugs.map((bug) => (
          <li key={bug.id}>
            {bug.description} - {bug.fixed ? "Fixed" : "New"}
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
