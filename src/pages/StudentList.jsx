import { useEffect, useState } from "react";
import "./StudentList.css";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/students")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch students");
        }

        return response.json();
      })
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setError("Unable to load students");
        setLoading(false);
      });
  }, []);

  return (
    <div className="student-list-page">
      <div className="student-list-container">
        <h1>Registered Students</h1>

        <p className="student-list-subtitle">
          View all registered students
        </p>

        {loading && <p>Loading students...</p>}

        {error && <p className="student-list-error">{error}</p>}

        {!loading && !error && students.length === 0 && (
          <p>No students registered yet.</p>
        )}

        {!loading && !error && students.length > 0 && (
          <div className="student-table-wrapper">
            <table className="student-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Skills</th>
                  <th>District</th>
                </tr>
              </thead>

              <tbody>
                {students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.skills}</td>
                    <td>{student.district}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default StudentList;