import React, { useState, useRef } from "react";
//write a JSX code.
//create a states and use Refs(declear it to use it)
//handleChangles and Clicks
//use prevState
//use map for exteended list
function Main() {
  const todoRefs = useRef();
  const [inputItems, setInputItems] = useState("");
  const [listItems, setListItems] = useState([]);

  const handelChanges = () => {
    setInputItems(todoRefs.current.value);
  };
  const handelClick = () => {
    setListItems((prevState) => [...prevState, inputItems]);
    // console.log(setListItems);
  };
  return (
    <div>
      <h1>TodoList</h1>
      <input
        type="text"
        ref={todoRefs}
        value={inputItems}
        onChange={handelChanges}
      ></input>
      <button onClick={handelClick}>Submit</button>
      <ul>
        {/* {
          (listItems.map = (value, index) => {
            <li key={index}>{value}</li>;
          })
        } */}
        {listItems.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default Main;
