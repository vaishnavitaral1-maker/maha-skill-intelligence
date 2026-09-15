import { useState } from "react";
import "./SkillMatching.css";

function SkillMatching() {
  const [selectedSkill, setSelectedSkill] = useState("");
  const [showResult, setShowResult] = useState(false);

  const skillData = {
    Java: {
      demand: "High",
      roles: ["Java Developer", "Backend Developer", "Spring Boot Developer"],
      courses: ["Core Java", "Spring Boot", "MySQL", "REST API"],
      gap: "Spring Boot and REST API",
    },
    Python: {
      demand: "High",
      roles: ["Python Developer", "Data Analyst", "AI/ML Engineer"],
      courses: ["Python", "Pandas", "Machine Learning", "SQL"],
      gap: "Machine Learning and SQL",
    },
    "Web Development": {
      demand: "Very High",
      roles: ["Frontend Developer", "Full Stack Developer", "Web Developer"],
      courses: ["HTML", "CSS", "JavaScript", "React", "Backend Development"],
      gap: "React and Backend Development",
    },
    "Cyber Security": {
      demand: "Growing",
      roles: ["Security Analyst", "SOC Analyst", "Cyber Security Engineer"],
      courses: ["Networking", "Linux", "Ethical Hacking", "Security Tools"],
      gap: "Networking and Security Tools",
    },
  };

  const handleCheckMatch = (event) => {
    event.preventDefault();

    if (selectedSkill) {
      setShowResult(true);
    }
  };

  return (
    <div className="matching-page">
      <div className="matching-header">
        <span className="matching-tag">AI SKILL MATCHING</span>

        <h1>Find Your Career Path</h1>

        <p>
          Select your skill area to discover suitable job roles, industry
          demand and recommended learning courses.
        </p>
      </div>

      <div className="matching-card">
        <h2>Skill Matching Assessment</h2>

        <form onSubmit={handleCheckMatch}>
          <label>Select Your Skill Area</label>

          <select
            value={selectedSkill}
            onChange={(event) => {
              setSelectedSkill(event.target.value);
              setShowResult(false);
            }}
            required
          >
            <option value="">Choose a skill</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="Web Development">Web Development</option>
            <option value="Cyber Security">Cyber Security</option>
          </select>

          <button type="submit">Check Skill Match →</button>
        </form>
      </div>

      {showResult && (
        <div className="matching-result">
          <div className="result-top">
            <div>
              <span className="result-label">Selected Skill</span>
              <h2>{selectedSkill}</h2>
            </div>

            <div className="demand-badge">
              {skillData[selectedSkill].demand} Demand
            </div>
          </div>

          <div className="result-grid">
            <div className="result-box">
              <h3>Recommended Job Roles</h3>

              <ul>
                {skillData[selectedSkill].roles.map((role) => (
                  <li key={role}>{role}</li>
                ))}
              </ul>
            </div>

            <div className="result-box">
              <h3>Recommended Courses</h3>

              <ul>
                {skillData[selectedSkill].courses.map((course) => (
                  <li key={course}>{course}</li>
                ))}
              </ul>
            </div>

            <div className="result-box gap-box">
              <h3>Suggested Skill Gap</h3>

              <p>{skillData[selectedSkill].gap}</p>
            </div>
          </div>

          <div className="matching-message">
            Based on current demo data, this skill area has relevant industry
            opportunities. Complete the recommended courses to improve your
            career readiness.
          </div>
        </div>
      )}

      <button
        className="matching-back-button"
        onClick={() => (window.location.href = "/")}
      >
        ← Back to Home
      </button>
    </div>
  );
}

export default SkillMatching;
