import { useEffect, useState } from "react";
import "./SkillSummary.css";

function SkillSummary() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/students")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch student data");
        }

        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setStudents(data);
        } else {
          setStudents([]);
        }

        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
        setError("Unable to load student data. Please start the backend.");
        setLoading(false);
      });
  }, []);

  const districtSummary = {};

  students.forEach((student) => {
    const district = student.district?.trim() || "Unknown";

    if (districtSummary[district]) {
      districtSummary[district] += 1;
    } else {
      districtSummary[district] = 1;
    }
  });

  const skillSummary = {};

  students.forEach((student) => {
    const skills = student.skills || "";

    skills.split(",").forEach((skill) => {
      const cleanSkill = skill.trim();

      if (cleanSkill !== "") {
        if (skillSummary[cleanSkill]) {
          skillSummary[cleanSkill] += 1;
        } else {
          skillSummary[cleanSkill] = 1;
        }
      }
    });
  });

  const sortedDistricts = Object.entries(districtSummary).sort(
    (a, b) => b[1] - a[1]
  );

  const sortedSkills = Object.entries(skillSummary).sort(
    (a, b) => b[1] - a[1]
  );

  return (
    <div className="skill-summary-page">
      <div className="skill-summary-container">
        <h1>Skill Intelligence Summary</h1>

        <p className="skill-summary-subtitle">
          District-wise student and skill analysis
        </p>

        {loading && <p className="status-message">Loading summary...</p>}

        {error && <p className="error-message">{error}</p>}

        {!loading && !error && (
          <>
            <div className="summary-card">
              <h2>Total Registered Students</h2>
              <p>{students.length}</p>
            </div>

            <div className="summary-section">
              <h2>District-wise Students</h2>

              {sortedDistricts.length === 0 ? (
                <p>No district data available.</p>
              ) : (
                <div className="summary-grid">
                  {sortedDistricts.map(([district, count]) => (
                    <div className="summary-item" key={district}>
                      <h3>{district}</h3>
                      <p>{count} students</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="summary-section">
              <h2>Skill-wise Students</h2>

              {sortedSkills.length === 0 ? (
                <p>No skill data available.</p>
              ) : (
                <div className="summary-grid">
                  {sortedSkills.map(([skill, count]) => (
                    <div className="summary-item" key={skill}>
                      <h3>{skill}</h3>
                      <p>{count} students</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SkillSummary;