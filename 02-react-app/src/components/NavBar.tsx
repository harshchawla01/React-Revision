interface NavBarProps {
  cartItemsCount: number; // For the sake of changing the number of items in the cart if a customer edits his or her cart
}

const NavBar = ({ cartItemsCount }: NavBarProps) => {
  return <div>Navbar: {cartItemsCount}</div>;
};

export default NavBar;
