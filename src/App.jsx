import { useState } from "react";
import "./App.css";

import StudentAssessment from "./pages/StudentAssessment";
import IndustryPortal from "./pages/IndustryPortal";
import GovernmentDashboard from "./pages/GovernmentDashboard";
import TrainingInstitutePortal from "./pages/TrainingInstitutePortal";
import SkillMatching from "./pages/SkillMatching";

function App() {
  const currentPath = window.location.pathname;

  if (currentPath === "/student-assessment") {
    return <StudentAssessment />;
  }

  if (currentPath === "/industry-portal") {
    return <IndustryPortal />;
  }

  if (currentPath === "/government-dashboard") {
    return <GovernmentDashboard />;
  }

  if (currentPath === "/training-institute") {
    return <TrainingInstitutePortal />;
  }
  if (currentPath === "/skill-matching") {
  return <SkillMatching />;
}

  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (section) => {
    setActiveSection(section);

    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <div className="logo-icon">M</div>

          <div>
            <h2>MAHA-SKILL</h2>
            <p>INTELLIGENCE</p>
          </div>
        </div>

        <div className="nav-links">
          <button
            className={activeSection === "home" ? "active" : ""}
            onClick={() => scrollToSection("home")}
          >
            Home
          </button>

          <button
            className={activeSection === "about" ? "active" : ""}
            onClick={() => scrollToSection("about")}
          >
            About
          </button>

          <button
            className={activeSection === "ecosystem" ? "active" : ""}
            onClick={() => scrollToSection("ecosystem")}
          >
            Ecosystem
          </button>

          <button
            className={activeSection === "contact" ? "active" : ""}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </div>

        <button
          className="nav-button"
          onClick={() => scrollToSection("ecosystem")}
        >
          Explore Platform →
        </button>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="tag">✦ SMART INDIA HACKATHON 2026</div>

          <h1>
            Bridging the gap between
            <span> Skills & Industry.</span>
          </h1>

          <p>
            An intelligent platform connecting Government, Industry, Training
            Institutes and Students to build a future-ready workforce for
            Maharashtra.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-button"
              onClick={() => scrollToSection("ecosystem")}
            >
              Explore Platform →
            </button>

            <button
              className="secondary-button"
              onClick={() => scrollToSection("about")}
            >
              Learn More
            </button>
          </div>

          <div className="hero-stats">
            <div>
              <h3>4</h3>
              <p>Connected Stakeholders</p>
            </div>

            <div>
              <h3>36+</h3>
              <p>Maharashtra Districts</p>
            </div>

            <div>
              <h3>AI</h3>
              <p>Powered Intelligence</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="orbit-card">
            <div className="center-circle">
              <span>MSI</span>
              <small>Skill Intelligence</small>
            </div>

            <div className="orbit-item government">
              🏛️
              <span>Government</span>
            </div>

            <div className="orbit-item industry">
              🏢
              <span>Industry</span>
            </div>

            <div className="orbit-item training">
              🎓
              <span>Training</span>
            </div>

            <div className="orbit-item students">
              👥
              <span>Students</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="section-heading">
          <div className="tag">OUR MISSION</div>

          <h2>Right Skills. Right People. Right Place.</h2>

          <p>
            We align industry demand with training programs and student career
            aspirations through intelligent data-driven insights.
          </p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">📊</div>

            <h3>Industry Demand</h3>

            <p>
              Employers provide job openings, required skills and workforce
              demand.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🏛️</div>

            <h3>Government Planning</h3>

            <p>
              District-wise intelligence for smarter skill development
              decisions.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎓</div>

            <h3>Training Institutes</h3>

            <p>
              Institutes align courses, seats and trainers with industry
              requirements.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🧠</div>

            <h3>Student Assessment</h3>

            <p>
              Discover interests, identify skill gaps and recommend suitable
              career paths.
            </p>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="ecosystem-section" id="ecosystem">
        <div className="section-heading">
          <div className="tag">OUR ECOSYSTEM</div>

          <h2>One Platform. Four Stakeholders.</h2>

          <p>
            Explore how every stakeholder contributes to a stronger and more
            aligned workforce.
          </p>
        </div>

        <div className="stakeholder-grid">
          {/* Government */}
          <div className="stakeholder-card">
            <span className="card-number">01</span>

            <div className="big-icon">🏛️</div>

            <h3>Government</h3>

            <p>
              Monitor district-wise demand, training capacity and workforce
              planning.
            </p>

            <button
              onClick={() =>
                (window.location.href = "/government-dashboard")
              }
            >
              View Dashboard →
            </button>
          </div>

          {/* Industry */}
          <div className="stakeholder-card">
            <span className="card-number">02</span>

            <div className="big-icon">🏢</div>

            <h3>Industry</h3>

            <p>
              Share job openings, required skills and emerging industry
              requirements.
            </p>

            <button
              onClick={() => (window.location.href = "/industry-portal")}
            >
              Industry Portal →
            </button>
          </div>

          {/* Training Institute */}
          <div className="stakeholder-card">
            <span className="card-number">03</span>

            <div className="big-icon">🎓</div>

            <h3>Training Institutes</h3>

            <p>
              Access industry demand and align courses, trainers and available
              seats.
            </p>

            <button
              onClick={() => (window.location.href = "/training-institute")}
            >
              Institute Portal →
            </button>
          </div>

          {/* Students */}
          <div className="stakeholder-card">
            <span className="card-number">04</span>

            <div className="big-icon">👥</div>

            <h3>Students</h3>

            <p>
              Take an assessment, discover interests and find suitable career
              opportunities.
            </p>

            <button
              onClick={() => (window.location.href = "/student-assessment")}
            >
              Start Assessment →
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="section-heading">
          <div className="tag">NEXORA</div>

          <h2>Building Maharashtra's Future Workforce</h2>

          <p>
            MAHA-SKILL INTELLIGENCE — A Smart India Hackathon 2026 project by
            Team NexOra.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="logo">
          <div className="logo-icon">M</div>

          <div>
            <h2>MAHA-SKILL</h2>
            <p>INTELLIGENCE</p>
          </div>
        </div>

        <p>© 2026 NexOra. SIH26134.</p>
      </footer>
    </div>
  );
}

export default App;