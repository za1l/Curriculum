import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ProfessionalProfile from "./components/ProfessionalProfile/ProfessionalProfile";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import AdditionalInfo from "./components/AdditionalInfo/AdditionalInfo";

function App() {
  return (
    <div className="container">
      <Header />
      <ProfessionalProfile />
      <WorkExperience />
      <Education />
      <Skills />
      <AdditionalInfo />
      <footer>
        <div className="footer-contact">
          <p>📞 617 189 458</p>
          <a
            href="https://www.linkedin.com/in/israel-murillo-170a54ab/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <svg
                className="contact-icon"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                style={{ fill: "currentColor" }}
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              LinkedIn
            </span>
          </a>
        </div>
        <p>&copy; 2025 Israel Murillo. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
