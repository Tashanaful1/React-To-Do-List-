import React from "react";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Todo List </h1>
    </header>
  );
}

const headerStyle = {
  color: "white",
  backgroundColor: "gray",
  textAlign: "center",
  padding: "10px",
};

export default Header;
