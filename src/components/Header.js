import React from "react";

function Header({ h1 }) {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <h1>{ h1 }</h1>
    </header>
  );
}

export default Header;
