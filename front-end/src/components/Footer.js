import React from "react";

function Footer({ name }) {
  return (
    <footer className="navbar fixed-bottom navbar-expand-lg navbar-light bg-light mt-4">
      <p className="centered col-lg-3 align-self-end">
        &copy; { name } - Todos os direitos reservados
      </p>
    </footer>
  );
}

export default Footer;
