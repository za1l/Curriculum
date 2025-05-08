import React from "react";
import "./AdditionalInfo.css";
import { FaLanguage, FaInfoCircle, FaStar } from "react-icons/fa";

const AdditionalInfo = () => {
  const languages = [
    { language: "Español", level: "Nativo" },
    { language: "Inglés", level: "Nivel medio hablado y escrito" },
  ];

  const additionalInfo = [
    "Disponibilidad: Inmediata",
    "Movilidad: Disponibilidad para desplazamiento",
    "Carnet de conducir: Sí",
  ];

  const otherInfo = [
    "Autodidacta",
    "Resolutivo",
    "Capacidad innata para el trabajo en equipo",
    "Experiencia en atención al cliente en diversos sectores",
    "Versatilidad y adaptabilidad a diferentes entornos laborales",
  ];

  return (
    <>
      <section className="languages">
        <h2><FaLanguage className="section-icon" /> IDIOMAS</h2>
        <ul>
          {languages.map((lang, index) => (
            <li key={index}>
              <strong>{lang.language}</strong>: {lang.level}
            </li>
          ))}
        </ul>
      </section>

      <section className="additional-info">
        <h2><FaInfoCircle className="section-icon" /> INFORMACIÓN ADICIONAL</h2>
        <ul>
          {additionalInfo.map((info, index) => (
            <li key={index}>{info}</li>
          ))}
        </ul>
      </section>

      <section className="other-info">
        <h2><FaStar className="section-icon" /> OTROS DATOS DE INTERÉS</h2>
        <ul>
          {otherInfo.map((info, index) => (
            <li key={index}>{info}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default AdditionalInfo;
