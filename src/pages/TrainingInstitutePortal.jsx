import "./TrainingInstitutePortal.css";
import { useState } from "react";

function TrainingInstitutePortal() {
  const [formData, setFormData] = useState({
    institute: "",
    district: "",
    course: "",
    skills: "",
    capacity: "",
    duration: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="institute-page">
      <div className="institute-header">
        <span className="portal-tag">TRAINING INSTITUTE PORTAL</span>
        <h1>Connect Training With Industry Demand</h1>
        <p>
          Register your institute, courses, available seats and training
          capacity to help students find the right opportunities.
        </p>
      </div>

      <div className="institute-card">
        <h2>Institute Registration</h2>

        <form onSubmit={handleSubmit}>
          <div className="institute-grid">
            <div className="form-group">
              <label>Institute Name</label>
              <input
                type="text"
                name="institute"
                placeholder="Enter institute name"
                value={formData.institute}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>District</label>
              <select
                name="district"
                value={formData.district}
                onChange={handleChange}
                required
              >
                <option value="">Select district</option>
                <option value="Nashik">Nashik</option>
                <option value="Pune">Pune</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Nagpur">Nagpur</option>
                <option value="Aurangabad">Aurangabad</option>
                <option value="Kolhapur">Kolhapur</option>
              </select>
            </div>

            <div className="form-group">
              <label>Course Name</label>
              <input
                type="text"
                name="course"
                placeholder="Example: Java Full Stack"
                value={formData.course}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Important Skills</label>
              <input
                type="text"
                name="skills"
                placeholder="Java, Spring Boot, MySQL"
                value={formData.skills}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Available Training Capacity</label>
              <input
                type="number"
                name="capacity"
                placeholder="Example: 100"
                value={formData.capacity}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Course Duration</label>
              <input
                type="text"
                name="duration"
                placeholder="Example: 6 months"
                value={formData.duration}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="institute-submit-button">
            Register Institute
          </button>
        </form>

        {submitted && (
          <div className="institute-success">
            Institute details submitted successfully for demo purposes.
          </div>
        )}
      </div>

      <button
        className="back-home-button"
        onClick={() => (window.location.href = "/")}
      >
        ← Back to Home
      </button>
    </div>
  );
}

export default TrainingInstitutePortal;
