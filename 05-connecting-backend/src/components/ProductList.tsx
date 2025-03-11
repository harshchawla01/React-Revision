import { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]); // It is just for showing infinite rerendering if we don't pass the dependency array in the effect hook. (No other use)

  useEffect(() => {
    console.log("Fetching products in", category);
    setProducts(["Clothing", "Household"]); // creates an infinite rerender due to useEffect getting called at each re-render and hence this useState
  }, [category]); // dependency array includes props or states and the effect hook will be dependent on these values. If any of these values changes, react will rerun our effect. If empty, then effect runs only once.

  return <div>ProductList</div>;
};

export default ProductList;
