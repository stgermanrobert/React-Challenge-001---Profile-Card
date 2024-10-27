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
        <SkillList className="skill-list" />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img
        src="photos/costadoJeZoom2.jpg"
        alt="German Robert"
        className="avatar"
      />
      <h1 className="data">German Robert</h1>
    </div>
  );
}

function Intro() {
  return (
    <div className="data">
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
      <Skill skill={"HTML + CSS 👍🏻"} x="green" />
      <Skill skill={"JavaScript 💪🏻"} x="blue" />
      <Skill skill={"React 👍🏻"} x="red" />
      <Skill skill={"Git and GitHub 👍🏻"} x="yellow" />
      <Skill skill={"Web Design 👍🏻"} x="light-blue" />
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
