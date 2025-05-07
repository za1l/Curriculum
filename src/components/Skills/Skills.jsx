import React from "react";
import "./Skills.css";

const SkillCategory = ({ title, skills }) => (
  <div className="skills-category">
    <h3>{title}</h3>
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  const technicalSkills = [
    "Dominio avanzado del paquete Office profesional",
    "Manejo experto de múltiples sistemas operativos (Windows, Linux, Mac, Android, iOS, Chrome OS)",
    "Gestión de redes, configuración de equipos y mantenimiento",
    "Conocimientos avanzados de programación (JavaScript, HTML, CSS, Java, Python)",
    "Experiencia con bases de datos (SQL Server, PHP)",
    "Administración web y desarrollo (WordPress, Dreamweaver)",
    "Configuración TCP/IP y Voz IP",
    "Diseño gráfico y edición (Adobe Suite, Corel Draw)",
    "Modelado 3D (3D Studio Max, Maya, Zbrush)",
    "Conocimientos de SAP",
  ];

  const personalSkills = [
    "Excelentes habilidades comunicativas",
    "Capacidad resolutiva y autodidacta",
    "Orientación al cliente",
    "Capacidad de trabajo bajo presión",
    "Organización y planificación",
    "Adaptabilidad a entornos cambiantes",
    "Trabajo en equipo",
    "Responsabilidad y compromiso",
  ];

  return (
    <section className="skills">
      <h2>COMPETENCIAS</h2>
      <SkillCategory title="TÉCNICAS" skills={technicalSkills} />
      <SkillCategory title="PERSONALES" skills={personalSkills} />
    </section>
  );
};

export default Skills;
