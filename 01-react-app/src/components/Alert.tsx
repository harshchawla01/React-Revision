import { ReactNode } from "react";

// rafce // React Arrow Function Component with Export
interface AlertProps {
  //   children: string; // children is a special prop in React. It is used to render the content between the opening and closing tags of the component
  // its type is whatever we select here in our props. Here we have chosen string. Let's change it to ReactNode for writing more complex structure between the opening and closing tags of the component
  children: ReactNode;
  onClose?: () => void;
}

const Alert = ({ children, onClose }: AlertProps) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
