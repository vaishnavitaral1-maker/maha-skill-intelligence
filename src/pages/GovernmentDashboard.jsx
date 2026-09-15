import "./GovernmentDashboard.css";

const skillDemand = [
  {
    skill: "Java",
    demand: 85,
    openings: 420,
  },
  {
    skill: "Python",
    demand: 78,
    openings: 360,
  },
  {
    skill: "Web Development",
    demand: 72,
    openings: 310,
  },
  {
    skill: "Cyber Security",
    demand: 65,
    openings: 240,
  },
  {
    skill: "Data Analytics",
    demand: 60,
    openings: 210,
  },
];

const districtData = [
  {
    district: "Nashik",
    skill: "Java Full Stack",
    students: 1250,
  },
  {
    district: "Pune",
    skill: "Data Analytics",
    students: 1800,
  },
  {
    district: "Aurangabad",
    skill: "Manufacturing Automation",
    students: 980,
  },
  {
    district: "Nagpur",
    skill: "Cyber Security",
    students: 760,
  },
];

function GovernmentDashboard() {
  return (
    <div className="government-page">
      <div className="government-header">
        <span className="government-label">
          Government Skill Intelligence Dashboard
        </span>

        <h1>Maharashtra Skill Intelligence Overview</h1>

        <p>
          Monitor student skills, industry requirements and emerging
          job-market demand across Maharashtra.
        </p>
      </div>

      <div className="dashboard-stats">
        <div className="dashboard-stat-card">
          <span>Students Assessed</span>
          <strong>12,540</strong>
          <small>+18% this month</small>
        </div>

        <div className="dashboard-stat-card">
          <span>Industry Requirements</span>
          <strong>486</strong>
          <small>From registered employers</small>
        </div>

        <div className="dashboard-stat-card">
          <span>Skills Tracked</span>
          <strong>42</strong>
          <small>Across different sectors</small>
        </div>

        <div className="dashboard-stat-card">
          <span>Average Skill Gap</span>
          <strong>36%</strong>
          <small>Based on assessments</small>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-panel">
          <div className="panel-heading">
            <h2>Most Demanded Skills</h2>
            <span>Demo Data</span>
          </div>

          <div className="skill-demand-list">
            {skillDemand.map((item) => (
              <div className="skill-demand-item" key={item.skill}>
                <div className="skill-demand-info">
                  <strong>{item.skill}</strong>
                  <span>{item.openings} openings</span>
                </div>

                <div className="demand-bar-background">
                  <div
                    className="demand-bar"
                    style={{ width: `${item.demand}%` }}
                  ></div>
                </div>

                <div className="demand-percentage">
                  {item.demand}% demand
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-panel">
          <div className="panel-heading">
            <h2>Skill Gap Analysis</h2>
            <span>Student Data</span>
          </div>

          <div className="gap-circle">
            <strong>36%</strong>
            <span>Average Gap</span>
          </div>

          <div className="gap-details">
            <div>
              <span className="dot high-dot"></span>
              High Gap
              <strong>22%</strong>
            </div>

            <div>
              <span className="dot medium-dot"></span>
              Medium Gap
              <strong>41%</strong>
            </div>

            <div>
              <span className="dot low-dot"></span>
              Low Gap
              <strong>37%</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-panel district-panel">
        <div className="panel-heading">
          <h2>District-wise Skill Demand</h2>
          <span>Maharashtra</span>
        </div>

        <div className="district-table-wrapper">
          <table className="district-table">
            <thead>
              <tr>
                <th>District</th>
                <th>High-Demand Skill</th>
                <th>Students Interested</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {districtData.map((item) => (
                <tr key={item.district}>
                  <td>{item.district}</td>
                  <td>{item.skill}</td>
                  <td>{item.students}</td>
                  <td>
                    <span className="status-badge">Growing Demand</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="dashboard-panel recommendation-panel">
        <div className="panel-heading">
          <h2>Government Recommendations</h2>
          <span>Action Points</span>
        </div>

        <div className="recommendation-grid">
          <div className="recommendation-card">
            <h3>Increase Java Training</h3>
            <p>
              More Java and Spring Boot training batches are recommended
              because of high industry demand.
            </p>
          </div>

          <div className="recommendation-card">
            <h3>Upgrade Cyber Security Courses</h3>
            <p>
              Add practical labs and ethical hacking modules to existing
              cyber security programs.
            </p>
          </div>

          <div className="recommendation-card">
            <h3>Improve Industry Collaboration</h3>
            <p>
              Training institutes should collaborate with employers for
              internships and placement opportunities.
            </p>
          </div>
        </div>
      </div>

      <button
        className="dashboard-back-button"
        onClick={() => (window.location.href = "/")}
      >
        Back to Home
      </button>
    </div>
  );
}

export default GovernmentDashboard;