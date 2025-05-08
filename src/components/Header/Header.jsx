import React from "react";
import "./Header.css";

// Importamos los iconos de Material Design como componentes SVG
const PhoneIcon = () => (
  <svg className="contact-icon" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"
    />
  </svg>
);

const EmailIcon = () => (
  <svg className="contact-icon" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
    />
  </svg>
);

const LocationIcon = () => (
  <svg className="contact-icon" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="contact-icon" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
    />
  </svg>
);

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
          <div className="contact-item">
            <PhoneIcon />
            <p>617 189 458</p>
          </div>
          <div className="contact-item">
            <EmailIcon />
            <p>israelmb81@gmail.com</p>
          </div>
          <div className="contact-item">
            <LocationIcon />
            <p>Madrid Capital</p>
          </div>
          <div className="contact-item">
            <a
              href="https://www.linkedin.com/in/israel-murillo-170a54ab/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "inherit",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <LinkedInIcon />
              <p>LinkedIn</p>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
