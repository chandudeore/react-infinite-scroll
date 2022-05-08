import React, { useState, useEffect } from "react";

const List = () => {
  const [listItems, setListItems] = useState(
    Array.from(Array(30).keys(), (n) => n + 1)
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    setTimeout(() => {
      setListItems((prevState) => [
        ...prevState,
        ...Array.from(Array(25).keys(), (n) => n + prevState.length + 1),
      ]);
    }, 1000);
  }

  return (
    <>
      <ul
        id="scroll"
        style={{
          width: "200px",
        }}
      >
        {listItems.map((listItem) => (
          <li className="list-group-item">List Item {listItem}</li>
        ))}
      </ul>
    </>
  );
};

export default List;
