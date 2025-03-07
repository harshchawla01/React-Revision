interface ButtonProps {
  children: string;
  color?: "primary" | "secondary" | "danger" | "success"; // Since we have set a default primary value for color, we can add a ? after color to make it optional for the App component to pass the color prop because it can take the default value if not passed. It is mandatory to do so otherwise the App component will show an error
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: ButtonProps) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
