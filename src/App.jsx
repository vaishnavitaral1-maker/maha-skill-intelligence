import { useState } from "react";
import "./App.css";

import StudentAssessment from "./pages/StudentAssessment";
import IndustryPortal from "./pages/IndustryPortal";
import GovernmentDashboard from "./pages/GovernmentDashboard";
import TrainingInstitutePortal from "./pages/TrainingInstitutePortal";
import SkillMatching from "./pages/SkillMatching";
import StudentRegistration from "./pages/StudentRegistration";
import StudentList from "./pages/StudentList";
import SkillSummary from "./pages/SkillSummary";

function App() {
  const [selectedRole, setSelectedRole] = useState("");

  const currentPath = window.location.pathname;

  // Student Registration Page
  if (currentPath === "/student-registration") {
    return <StudentRegistration />;
  }

  // Student List Page
  if (currentPath === "/student-list") {
    return <StudentList />;
  }

  // Skill Summary Page
  if (currentPath === "/skill-summary") {
    return <SkillSummary />;
  }

  // Student Assessment Page
  if (currentPath === "/student-assessment") {
    return <StudentAssessment />;
  }

  // Industry Portal Page
  if (currentPath === "/industry-portal") {
    return <IndustryPortal />;
  }

  // Government Dashboard Page
  if (currentPath === "/government-dashboard") {
    return <GovernmentDashboard />;
  }

  // Training Institute Portal Page
  if (currentPath === "/training-institute") {
    return <TrainingInstitutePortal />;
  }

  // Skill Matching Page
  if (currentPath === "/skill-matching") {
    return <SkillMatching />;
  }

  // Home Page
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>MAHA-SKILL INTELLIGENCE</h1>

        <p>
          Maharashtra Labour Market and Skill Intelligence Platform
        </p>
      </header>

      <main className="home-content">
        <h2>Welcome to MAHA-SKILL INTELLIGENCE</h2>

        <p>
          Select a portal to continue.
        </p>

        <div className="portal-buttons">
          <button
            onClick={() => {
              window.location.href = "/student-registration";
            }}
          >
            Student Registration
          </button>

          <button
            onClick={() => {
              window.location.href = "/student-assessment";
            }}
          >
            Student Assessment
          </button>

          <button
            onClick={() => {
              window.location.href = "/student-list";
            }}
          >
            Student List
          </button>

          <button
            onClick={() => {
              window.location.href = "/skill-summary";
            }}
          >
            Skill Summary
          </button>

          <button
            onClick={() => {
              window.location.href = "/skill-matching";
            }}
          >
            Skill Matching
          </button>

          <button
            onClick={() => {
              window.location.href = "/industry-portal";
            }}
          >
            Industry Portal
          </button>

          <button
            onClick={() => {
              window.location.href = "/government-dashboard";
            }}
          >
            Government Dashboard
          </button>

          <button
            onClick={() => {
              window.location.href = "/training-institute";
            }}
          >
            Training Institute Portal
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;