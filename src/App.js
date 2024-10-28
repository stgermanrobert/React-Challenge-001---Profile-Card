import "./App.css";

const skills = [
  {
    skill: "HTML + CSS",
    level: "intermediate",
    color: "orange",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "yellow",
  },
  {
    skill: "React",
    level: "novice",
    color: "skyblue",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "red",
  },
  {
    skill: "Web Design",
    level: "intermediate",
    color: "blue",
  },
  {
    skill: "AI",
    level: "advanced",
    color: "green",
  },
];

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
          for each web dev skill that you have,
          customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img src="Photos/germanRobert.jpg" alt="German Robert" className="avatar" />
  );
}

function Intro() {
  return (
    <div className="data">
      <h1>German Robert</h1>
      <p>
        Aspiring front-end developer with a background in AV production. When
        not working or studying, I enjoy exploring new music, watching horror
        movies, and playing football with friends.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "novice" && "👶🏻"}
        {level === "intermediate" && "👍🏻"}
        {level === "advanced" && "💪🏻"}
      </span>
    </div>
  );
}
