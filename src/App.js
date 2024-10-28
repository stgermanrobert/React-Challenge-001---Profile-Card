import "./App.css";

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
      <Skill skill={"HTML + CSS 👍🏻"} color="orange" />
      <Skill skill={"JavaScript 💪🏻"} color="yellow" />
      <Skill skill={"React 👍🏻"} color="skyblue" />
      <Skill skill={"Git and GitHub 👍🏻"} color="red" />
      <Skill skill={"Web Design 👍🏻"} color="blue" />
      <Skill skill={"AI 💪🏻"} color="green" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      {props.skill}
    </div>
  );
}
