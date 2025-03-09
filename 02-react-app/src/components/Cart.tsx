interface CartProps {
  cartItems: string[];
  onClear: () => void;
}

const Cart = ({ cartItems, onClear }: CartProps) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}> {item} </li>
        ))}
      </ul>
      <button onClick={onClear}>Clear cart</button>
    </>
  );
};

export default Cart;
