import { useState } from "react";
import "./IndustryPortal.css";

function IndustryPortal() {
  const [formData, setFormData] = useState({
    company: "",
    industry: "",
    role: "",
    skills: "",
    openings: "",
    experience: "",
  });

  const [requirements, setRequirements] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.company ||
      !formData.industry ||
      !formData.role ||
      !formData.skills ||
      !formData.openings
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const newRequirement = {
      ...formData,
      id: Date.now(),
    };

    setRequirements([...requirements, newRequirement]);

    setFormData({
      company: "",
      industry: "",
      role: "",
      skills: "",
      openings: "",
      experience: "",
    });
  };

  return (
    <div className="industry-page">
      <div className="industry-header">
        <span className="industry-label">Industry Intelligence Portal</span>

        <h1>Share Your Industry Skill Requirements</h1>

        <p>
          Help us understand current job-market demand and identify the skills
          required by industries.
        </p>
      </div>

      <div className="industry-content">
        <div className="industry-form-card">
          <h2>Employer Requirement Form</h2>

          <form onSubmit={handleSubmit}>
            <label>Company Name *</label>
            <input
              type="text"
              name="company"
              placeholder="Enter company name"
              value={formData.company}
              onChange={handleChange}
            />

            <label>Industry Type *</label>
            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
            >
              <option value="">Select industry</option>
              <option value="IT and Software">IT and Software</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Banking and Finance">Banking and Finance</option>
              <option value="Education">Education</option>
            </select>

            <label>Required Job Role *</label>
            <input
              type="text"
              name="role"
              placeholder="Example: Java Developer"
              value={formData.role}
              onChange={handleChange}
            />

            <label>Required Skills *</label>
            <textarea
              name="skills"
              placeholder="Example: Java, Spring Boot, SQL, React"
              value={formData.skills}
              onChange={handleChange}
            ></textarea>

            <label>Number of Openings *</label>
            <input
              type="number"
              name="openings"
              placeholder="Example: 25"
              value={formData.openings}
              onChange={handleChange}
            />

            <label>Required Experience</label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
            >
              <option value="">Select experience</option>
              <option value="Fresher">Fresher</option>
              <option value="0-2 Years">0–2 Years</option>
              <option value="2-5 Years">2–5 Years</option>
              <option value="5+ Years">5+ Years</option>
            </select>

            <button type="submit">Submit Requirement</button>
          </form>
        </div>

        <div className="requirement-card-section">
          <div className="section-heading">
            <h2>Submitted Industry Requirements</h2>
            <span>{requirements.length} Requirements</span>
          </div>

          {requirements.length === 0 ? (
            <div className="empty-requirement">
              <h3>No requirements added yet</h3>
              <p>
                Submit an employer requirement to display it here.
              </p>
            </div>
          ) : (
            <div className="requirement-list">
              {requirements.map((requirement) => (
                <div className="requirement-card" key={requirement.id}>
                  <div className="requirement-top">
                    <h3>{requirement.role}</h3>
                    <span>{requirement.industry}</span>
                  </div>

                  <p className="company-name">
                    {requirement.company}
                  </p>

                  <p>
                    <strong>Skills:</strong> {requirement.skills}
                  </p>

                  <div className="requirement-details">
                    <span>
                      <strong>Openings:</strong> {requirement.openings}
                    </span>

                    <span>
                      <strong>Experience:</strong>{" "}
                      {requirement.experience || "Not specified"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <button
        className="back-home-button"
        onClick={() => (window.location.href = "/")}
      >
        Back to Home
      </button>
    </div>
  );
}

export default IndustryPortal;
