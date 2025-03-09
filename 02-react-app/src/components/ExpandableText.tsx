import { useState } from "react";

interface ExpandableTextProps {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: ExpandableTextProps) => {
  const [isExpanded, setExpended] = useState(false);

  // The original text never changes. Therefore, it is not passed as state. It is passes as it is in props by the App component. Just the text to be shown is calculated to truncate
  if (children.length <= maxChars) return <p>{children}</p>;
  const text = isExpanded ? children : children.substring(0, maxChars);
  return (
    <p>
      {text}...{" "}
      <button onClick={() => setExpended(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </p>
  );
};

export default ExpandableText;
