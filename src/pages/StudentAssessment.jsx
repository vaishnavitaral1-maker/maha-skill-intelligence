import { useState } from "react";
import skillQuestions from "../data/skillQuestions";
import "./StudentAssessment.css";

const skills = [
  {
    name: "Java",
    icon: "☕",
    description: "Core Java, OOP, Collections and JVM",
  },
  {
    name: "Python",
    icon: "🐍",
    description: "Python basics, functions and data analysis",
  },
  {
    name: "Web Development",
    icon: "🌐",
    description: "HTML, CSS, JavaScript and DOM",
  },
  {
    name: "Cyber Security",
    icon: "🔐",
    description: "Security fundamentals, attacks and encryption",
  },
];

function StudentAssessment() {
  const [selectedSkill, setSelectedSkill] = useState("");
  const [selfLevel, setSelfLevel] = useState("");
  const [step, setStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const questions = selectedSkill
    ? skillQuestions[selectedSkill]
    : [];

  const currentQuestion = questions[step];

  const handleSkillSelect = (skill) => {
    setSelectedSkill(skill);
  };

  const handleLevelSelect = (level) => {
    setSelfLevel(level);
  };

  const handleNext = () => {
    if (!selectedAnswer) {
      alert("Please select an answer first.");
      return;
    }

    const updatedAnswers = [
      ...answers,
      {
        question: currentQuestion.question,
        selectedAnswer,
        correctAnswer: currentQuestion.answer,
        isCorrect: selectedAnswer === currentQuestion.answer,
        topic: currentQuestion.topic,
      },
    ];

    setAnswers(updatedAnswers);
    setSelectedAnswer("");

    if (step === questions.length - 1) {
      calculateResult(updatedAnswers);
    } else {
      setStep(step + 1);
    }
  };

  const calculateResult = (finalAnswers) => {
    const correctAnswers = finalAnswers.filter(
      (answer) => answer.isCorrect
    ).length;

    const score = Math.round(
      (correctAnswers / questions.length) * 100
    );

    let assessedLevel = "Beginner";

    if (score >= 80) {
      assessedLevel = "Advanced";
    } else if (score >= 50) {
      assessedLevel = "Intermediate";
    }

    const wrongTopics = finalAnswers
      .filter((answer) => !answer.isCorrect)
      .map((answer) => answer.topic);

    const uniqueTopics = [...new Set(wrongTopics)];

    setResult({
      score,
      correctAnswers,
      assessedLevel,
      wrongTopics: uniqueTopics,
    });
  };

  const restartAssessment = () => {
    setSelectedSkill("");
    setSelfLevel("");
    setStep(0);
    setSelectedAnswer("");
    setAnswers([]);
    setResult(null);
  };

  if (result) {
    return (
      <div className="assessment-page">
        <div className="assessment-result-card">
          <span className="result-badge">
            Assessment Completed
          </span>

          <h1>{selectedSkill} Skill Assessment Result</h1>

          <p className="result-subtitle">
            Your self-declared level and actual test performance
            are compared below.
          </p>

          <div className="result-grid">
            <div className="result-box">
              <span>Selected Skill</span>
              <strong>{selectedSkill}</strong>
            </div>

            <div className="result-box">
              <span>Self-Declared Level</span>
              <strong>{selfLevel}</strong>
            </div>

            <div className="result-box">
              <span>Assessed Level</span>
              <strong>{result.assessedLevel}</strong>
            </div>

            <div className="result-box">
              <span>Test Score</span>
              <strong>{result.score}%</strong>
            </div>
          </div>

          <div className="score-message">
            {selfLevel === result.assessedLevel ? (
              <p>
                Your declared level matches your assessed skill
                level.
              </p>
            ) : (
              <p>
                Your declared level is <b>{selfLevel}</b>, but your
                assessed level is <b>{result.assessedLevel}</b>.
                This shows a possible skill gap.
              </p>
            )}
          </div>

          <div className="result-section">
            <h2>Skill Gap Identified</h2>

            {result.wrongTopics.length > 0 ? (
              <ul>
                {result.wrongTopics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            ) : (
              <p>
                Excellent! You answered all questions correctly.
              </p>
            )}
          </div>

          <div className="result-section">
            <h2>Recommended Learning Path</h2>

            <ol>
              <li>Revise {selectedSkill} fundamentals</li>
              <li>Practice topic-wise questions</li>
              <li>Complete recommended learning resources</li>
              <li>Solve practical projects</li>
              <li>Retake the assessment</li>
            </ol>
          </div>

          <div className="result-actions">
            <button onClick={restartAssessment}>
              Retake Assessment
            </button>

            <button
              className="secondary-button"
              onClick={() => (window.location.href = "/")}
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!selectedSkill) {
    return (
      <div className="assessment-page">
        <div className="assessment-card">
          <span className="assessment-label">
            Skill Verification
          </span>

          <h1>Choose Your Interested Skill</h1>

          <p>
            Select the skill you want to assess. You will receive
            questions related to your selected skill.
          </p>

          <div className="skill-selection-grid">
            {skills.map((skill) => (
              <button
                className="skill-selection-card"
                key={skill.name}
                onClick={() => handleSkillSelect(skill.name)}
              >
                <span className="skill-icon">{skill.icon}</span>

                <strong>{skill.name}</strong>

                <small>{skill.description}</small>
              </button>
            ))}
          </div>

          <button
            className="secondary-button"
            onClick={() => (window.location.href = "/")}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  if (!selfLevel) {
    return (
      <div className="assessment-page">
        <div className="assessment-card">
          <span className="assessment-label">
            {selectedSkill} Assessment
          </span>

          <h1>What is your current level?</h1>

          <p>
            Select the level you believe you currently have in{" "}
            <b>{selectedSkill}</b>.
          </p>

          <div className="level-options">
            {["Beginner", "Intermediate", "Advanced"].map(
              (level) => (
                <button
                  key={level}
                  className="level-button"
                  onClick={() => handleLevelSelect(level)}
                >
                  {level}
                </button>
              )
            )}
          </div>

          <button
            className="secondary-button"
            onClick={() => setSelectedSkill("")}
          >
            Change Skill
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="assessment-page">
      <div className="assessment-card">
        <div className="assessment-top">
          <span>
            Question {step + 1} of {questions.length}
          </span>

          <span>
            {selectedSkill} | {selfLevel}
          </span>
        </div>

        <div className="progress-container">
          <div
            className="progress-bar"
            style={{
              width: `${((step + 1) / questions.length) * 100}%`,
            }}
          ></div>
        </div>

        <h1>{currentQuestion.question}</h1>

        <div className="answer-options">
          {currentQuestion.options.map((option) => (
            <button
              key={option}
              className={
                selectedAnswer === option
                  ? "answer-option selected"
                  : "answer-option"
              }
              onClick={() => setSelectedAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>

        <button className="next-button" onClick={handleNext}>
          {step === questions.length - 1
            ? "Submit Assessment"
            : "Next Question"}
        </button>
      </div>
    </div>
  );
}

export default StudentAssessment;