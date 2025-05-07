import React from "react";
import "./Education.css";

const EducationItem = ({ title, institution, period }) => (
  <div className="education-item">
    <h3>{title}</h3>
    <p className="institution">
      {institution} {period && <em>| {period}</em>}
    </p>
  </div>
);

const Education = () => {
  const formalEducation = [
    {
      title: "TÍTULO SUPERIOR CREATIVO PUBLICITARIO",
      institution: "Escuela de Arte Mateo Inurria (Córdoba)",
      period: "2005-2006",
    },
    {
      title: "TÍTULO DE AUXILIAR TÉCNICO ELECTRÓNICO AUDIOVISUAL",
      institution: "Academia Infonet",
      period: "2006-2007",
    },
    {
      title: "TÍTULO DISEÑADOR/MODELADOR GRÁFICOS 3D",
      institution: "Mancomunidad Valle del Guadiato",
      period: "2007-2008",
    },
  ];

  const additionalEducation = [
    "MOOC HTML5 y Node.js | Universidad Politécnica de Madrid",
    "Desarrollo de aplicaciones HTML5, CSS, Javascript y FirefoxOS | Universidad Politécnica de Madrid",
    "Socorrista Acuático y Desfibrilador Externo (DEA) | Ansar/Córdoba",
    "Animador Sociocultural | Casa de la Juventud Peñarroya-Pueblonuevo",
    "Auxiliar Cabina de Pasajeros | Eurostar/Córdoba",
  ];

  return (
    <section className="education">
      <h2>FORMACIÓN ACADÉMICA</h2>
      {formalEducation.map((edu, index) => (
        <EducationItem key={index} {...edu} />
      ))}

      <h3 className="additional-education-title">FORMACIÓN COMPLEMENTARIA</h3>
      <ul className="additional-education-list">
        {additionalEducation.map((item, index) => (
          <li
            key={index}
            dangerouslySetInnerHTML={{
              __html: `<strong>${item.split("|")[0].trim()}</strong>${
                item.includes("|") ? " |" + item.split("|")[1] : ""
              }`,
            }}
          />
        ))}
      </ul>
    </section>
  );
};

export default Education;
