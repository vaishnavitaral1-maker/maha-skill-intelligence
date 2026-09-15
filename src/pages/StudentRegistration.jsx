import { useState } from "react";
import "./StudentRegistration.css";

function StudentRegistration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [skills, setSkills] = useState("");
  const [district, setDistrict] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const studentData = {
      name: name,
      email: email,
      skills: skills,
      district: district
    };

    try {
      const response = await fetch("http://localhost:8080/api/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(studentData)
      });

      if (response.ok) {
        alert("Student registered successfully!");

        setName("");
        setEmail("");
        setSkills("");
        setDistrict("");

        window.location.href = "/student-assessment";
      } else {
        alert("Failed to register student");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Backend server is not running");
    }
  };

  return (
    <div className="student-registration-page">
      <div className="student-registration-container">
        <h1>Student Registration</h1>

        <p className="registration-subtitle">
          Register yourself for skill assessment
        </p>

        <form className="registration-form" onSubmit={handleSubmit}>
          <div>
            <label>Student Name</label>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label>Skills</label>
            <input
              type="text"
              value={skills}
              onChange={(event) => setSkills(event.target.value)}
              placeholder="Example: Java, SQL, HTML"
              required
            />
          </div>

          <div>
            <label>District</label>
            <input
              type="text"
              value={district}
              onChange={(event) => setDistrict(event.target.value)}
              placeholder="Enter your district"
              required
            />
          </div>

          <button
            type="submit"
            className="registration-submit-button"
          >
            Register Student
          </button>
        </form>
      </div>
    </div>
  );
}

export default StudentRegistration;