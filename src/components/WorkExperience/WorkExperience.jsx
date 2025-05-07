import React from "react";
import "./WorkExperience.css";

const Job = ({ title, company, responsibilities }) => (
  <div className="job">
    <h3>{title}</h3>
    {company && <p className="company">{company}</p>}
    <ul>
      {responsibilities.map((responsibility, index) => (
        <li key={index} dangerouslySetInnerHTML={{ __html: responsibility }} />
      ))}
    </ul>
  </div>
);

const WorkExperience = () => {
  const jobs = [
    {
      title: "AUXILIAR ADMINISTRATIVO",
      company: "Ayuntamiento Peñarroya-Pueblonuevo",
      responsibilities: [
        "Mantenimiento, administración y reparación de red y equipos de todos los edificios oficiales (ayuntamiento, comisaría, biblioteca, casa de la juventud, etc.).",
        "Administración y desarrollo de la web municipal.",
        "Gestión documental y soporte técnico a diferentes departamentos.",
      ],
    },
    {
      title: "ASISTENTE TÉCNICO / TELEOPERADOR",
      company: "Telefónica España S.A. - Plataforma ATENTO (Córdoba)",
      responsibilities: [
        "Asistencia técnica telefónica (1004) con altos estándares de calidad.",
        "Configuración de cuentas y gestores de correos.",
        "Configuración de routers y resolución de incidencias informáticas.",
        "Atención personalizada a clientes, siguiendo protocolos establecidos.",
      ],
    },
    {
      title: "DEPENDIENTE / TÉCNICO INFORMÁTICO",
      company: "Solunext Informática",
      responsibilities: [
        "Atención al cliente y soporte técnico informático.",
        "Apoyo en labores administrativas y gestión de documentación.",
        "Mantenimiento y reparación de equipos informáticos.",
      ],
    },
    {
      title: "TÉCNICO INFORMÁTICO",
      company: "Academia Infonet",
      responsibilities: [
        "Montaje y configuración de red intranet del centro.",
        "Configuración de switches y servidores.",
        "Instalación de cableado y mantenimiento de equipos.",
      ],
    },
    {
      title: "PROFESOR DE ACTIVIDADES EXTRAESCOLARES",
      company: "Colegio Público Aurelio Sánchez (ATTCOM SERVICIOS)",
      responsibilities: [
        "Profesor de informática.",
        "Gestión de aula TIC.",
        "Planificación y ejecución de actividades educativas.",
      ],
    },
    {
      title: "TELEOPERADOR",
      company: "Digital Plus - Plataforma Catsa (Málaga)",
      responsibilities: [
        "Venta de productos Digital Plus vía telefónica.",
        "Gestión de consultas y resolución de incidencias.",
      ],
    },
    {
      title: "EXPERIENCIA EN HOSTELERÍA",
      responsibilities: [
        "<strong>Jefe de Sala</strong> - Restaurante Nuovo Sapore (Córdoba) / Interfedez",
        "<strong>Camarero de Barra</strong> - Salón de Juegos La Cabala",
        "<strong>Camarero de Sala</strong> - Restaurante Kobe (Málaga)",
        "<strong>Camarero de Barra</strong> - Museo del Jamón (Madrid)",
      ],
    },
  ];

  return (
    <section className="work-experience">
      <h2>EXPERIENCIA LABORAL</h2>
      {jobs.map((job, index) => (
        <Job key={index} {...job} />
      ))}
    </section>
  );
};

export default WorkExperience;
