import men1 from "../images/men1.png";
import girl1 from "../images/girl.jpg";
import men2 from "../images/men2.webp";
import men3 from "../images/download.jpg";
import Teambox from "./Teambox";

function Team() {
  const teamData = [
    { image: men1, heading: "Domina Li", title: "SENIOR DESIGNER" },
    { image: girl1, heading: "Alina Jia", title: "SENIOR DESIGNER" },
    { image: men2, heading: "Suresh Doe", title: "SENIOR DESIGNER" },
    { image: men3, heading: "John Smith", title: "JUNIOR DESIGNER" },
  ];
  return (
    <div className="team-x">
      <div className="service-heading">
        <h3>TEAM</h3>
        <h1>OUR BEST EXPERTISE</h1>
      </div>
      <div className="team">
        <Teambox teamData={teamData} />
      </div>
    </div>
  );
}

export default Team;
