import React from "react";

function Footer({ name }) {
  return (
    <footer className="navbar navbar-expand-lg navbar-light bg-light">
      <p className="centered col-lg-3">&copy;{ name } - Todos os direitos reservados</p>
    </footer>
  );
}

export default Footer;
