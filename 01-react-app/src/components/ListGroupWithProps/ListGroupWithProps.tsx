import { MouseEvent, useState } from "react"; // This event type of ts handles all mouse events that can be triggerred by mouse. Here we are making use of it for click event
import { Fragment } from "react/jsx-runtime";
// import "./ListGroupWithProps.css";
// import styles from "./ListGroupWithProps.module.css"; // Now styles is an object which contains all the css properties with class names as keys. So, we can use them as styles["class-name"]
import styled from "styled-components"; // earlier there was a problem with styled-components. The ts compiler didn't know the type of objects defined in this library. So, we had to install the @types/styled-components. But now it is fixed and we don't need to do that extra step

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "blue" : "none")};
`;

interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // Now in jsx we do not a for loop, so now we will be using map
  // Also, inside the jsx expression you cannot write your if statement, we use ternary operator
  //   items = [];
  //   if (items.length === 0) {
  //     return (
  //       <>
  //         <p>No items found</p>
  //       </>
  //     );
  //   }

  // let selectIndex = 0; // This variable is local to its function component. So React is not aware of it. It's like a little secret inside this component. So, it will not be accessible outside this function. So, we can use it here without any worries. But if we want to use it outside this function, we can use useState hook

  // Hook
  // const arr = useState(-1);
  // arr[0]; // variable
  // arr[1]; // updater function

  const [selectIndex, setSelectIndex] = useState(-1); // This is a hook. It returns an array with two elements. First element is the value of the state variable and the second element is the function that can be used to update the state variable. So, we can use array destructuring to get the values of the state variable and the updater function.

  //   const getMessage = () => {
  //     return items.length === 0 ? <p>No items found</p> : null;
  //   };

  // const handleClick = (e) => console.log(e); // Uncommenting it will show a typescript error stating the implicit type for e as any. Babu typescript me ho aap. Type mention krna pdega

  // Event handler
  const handleClick = (e: MouseEvent) => {
    console.log(e.target);
  };

  return (
    <Fragment>
      {" "}
      {/* In short we write fragment as <></> */}
      <h1>{heading}</h1>
      {/* {items.length === 0 ? <p>No items found</p> : null} */}
      {/* You can also do this logic and shit inside a function. Why write everything in bechara return. Outside return, you can wrap it in a variable or make a function or do whatever you want to man */}
      {/* {getMessage()} // Bhai yha khaali naam likhke mat chhod dio function ka. Isko callback nhi krega koi (hihi) */}
      {/* But we also have a good logic instead, written below */}
      {items.length === 0 && <p>No items found</p>}
      {/* Now that is smart because we know that && goes to the second condition only when the first condition is true (CP kind of approach) */}
      {/* <ul className="list-group"> */}
      {/* <ul className={[styles.listGroup, styles.container].join(" ")}> */}
      <List>
        {items.map((item, index) => (
          // <li
          <ListItem
            // className="list-group-item"
            // className={
            //   selectIndex === index
            //     ? "list-group-item active"
            //     : "list-group-item"
            // }
            active={index === selectIndex}
            key={item}
            // onClick={(e) => {
            //   //   console.log(item, index);
            //   console.log(e);
            // }}
            onClick={(e) => {
              handleClick(e);
              setSelectIndex(index); // You don't need to define this function. It is predefined by React. You just need to call it with the new value of the state variable
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
        {/* Chack console after updating your code everytime. There might be some errors there even if your screen is displayed without errors as happens in the above case when you don't mentio key for the list items */}

        {/* <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}
      </List>
      {/* </ul> */}
    </Fragment>
  );
}
export default ListGroup;
