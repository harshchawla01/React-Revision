import { useEffect, useRef, useState } from "react";
import ProductList from "./components/ProductList";

const App = () => {
  const ref = useRef<HTMLInputElement>(null);

  const [category, setCategory] = useState("");

  // called after render
  // useEffect(() => {
  //   // Side effect - Changed something outside of this component (in the DOM)
  //   if (ref.current) ref.current.focus();
  // });

  useEffect(() => {
    document.title = "My App";
  });

  return (
    <div>
      <select
        onChange={(event) => setCategory(event.target.value)}
        className="form-select"
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      {/* <input ref={ref} type="text" className="form-control" /> */}
      <ProductList category={category} />
    </div>
  );
};

export default App;
