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
      <Skill skill={"HTML + CSS 👍🏻"} x="orange" />
      <Skill skill={"JavaScript 💪🏻"} x="yellow" />
      <Skill skill={"React 👍🏻"} x="skyblue" />
      <Skill skill={"Git and GitHub 👍🏻"} x="red" />
      <Skill skill={"Web Design 👍🏻"} x="blue" />
      <Skill skill={"AI 💪🏻"} x="green" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.x }}>
      {props.skill}
    </div>
  );
}
