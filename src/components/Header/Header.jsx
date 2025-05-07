import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <img
        src="/foto perfil.webp"
        alt="Foto de Israel Murillo"
        className="profile-pic"
      />
      <div className="header-text">
        <h1>ISRAEL MURILLO</h1>
        <p className="subtitle">
          Auxiliar Administrativo | Técnico Informático | Asistente Técnico
        </p>
        <div className="contact-info">
          <p>617 189 458</p>
          <p>israelmb81@gmail.com</p>
          <p>C/de la Paloma nº 10 4 9ª, Madrid</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
