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
        <p>&copy; 2024 Israel Murillo. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
