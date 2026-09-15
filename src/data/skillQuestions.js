const skillQuestions = {
  Java: [
    {
      question: "Which keyword is used to create a class in Java?",
      options: ["function", "class", "define", "struct"],
      answer: "class",
      level: "Beginner",
      topic: "Java Basics",
    },
    {
      question: "Which concept allows one class to acquire properties of another class?",
      options: [
        "Encapsulation",
        "Inheritance",
        "Abstraction",
        "Compilation",
      ],
      answer: "Inheritance",
      level: "Intermediate",
      topic: "OOP",
    },
    {
      question: "Which collection does not allow duplicate elements?",
      options: ["List", "ArrayList", "Set", "Queue"],
      answer: "Set",
      level: "Intermediate",
      topic: "Collections",
    },
    {
      question: "Which component executes Java bytecode?",
      options: ["JDK", "JRE", "JVM", "Compiler"],
      answer: "JVM",
      level: "Advanced",
      topic: "JVM",
    },
  ],

  Python: [
    {
      question: "Which symbol is used to write a comment in Python?",
      options: ["//", "#", "/*", "<!--"],
      answer: "#",
      level: "Beginner",
      topic: "Python Basics",
    },
    {
      question: "Which data type stores multiple values in an ordered form?",
      options: ["List", "Integer", "Boolean", "Float"],
      answer: "List",
      level: "Beginner",
      topic: "Data Types",
    },
    {
      question: "Which keyword is used to define a function in Python?",
      options: ["function", "define", "def", "fun"],
      answer: "def",
      level: "Intermediate",
      topic: "Functions",
    },
    {
      question: "Which library is commonly used for data analysis in Python?",
      options: ["Pandas", "Django", "Tkinter", "Flask"],
      answer: "Pandas",
      level: "Advanced",
      topic: "Data Analysis",
    },
  ],

  "Web Development": [
    {
      question: "Which language is used to structure a web page?",
      options: ["CSS", "HTML", "JavaScript", "SQL"],
      answer: "HTML",
      level: "Beginner",
      topic: "HTML",
    },
    {
      question: "Which language is used to style a web page?",
      options: ["HTML", "CSS", "Java", "Python"],
      answer: "CSS",
      level: "Beginner",
      topic: "CSS",
    },
    {
      question: "Which language is used to add interactivity to websites?",
      options: ["SQL", "HTML", "JavaScript", "XML"],
      answer: "JavaScript",
      level: "Intermediate",
      topic: "JavaScript",
    },
    {
      question: "Which JavaScript feature is used to select an HTML element?",
      options: [
        "document.querySelector()",
        "console.print()",
        "select.html()",
        "get.file()",
      ],
      answer: "document.querySelector()",
      level: "Advanced",
      topic: "DOM",
    },
  ],

  "Cyber Security": [
    {
      question: "What does CIA stand for in cyber security?",
      options: [
        "Confidentiality, Integrity, Availability",
        "Control, Internet, Access",
        "Computer, Information, Application",
        "Cyber, Identity, Authentication",
      ],
      answer: "Confidentiality, Integrity, Availability",
      level: "Beginner",
      topic: "Security Fundamentals",
    },
    {
      question: "Which attack tries to steal information through fake messages or websites?",
      options: ["Phishing", "Debugging", "Formatting", "Caching"],
      answer: "Phishing",
      level: "Beginner",
      topic: "Cyber Attacks",
    },
    {
      question: "Which method verifies the identity of a user?",
      options: [
        "Authentication",
        "Encryption",
        "Compression",
        "Backup",
      ],
      answer: "Authentication",
      level: "Intermediate",
      topic: "Authentication",
    },
    {
      question: "Which technique converts readable data into unreadable form?",
      options: ["Authentication", "Encryption", "Routing", "Scanning"],
      answer: "Encryption",
      level: "Advanced",
      topic: "Cryptography",
    },
  ],
};

export default skillQuestions;