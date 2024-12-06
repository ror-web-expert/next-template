
import Teambox from "./Teambox";
import teamData from '../data/team.json'

function Team() {    
  return (
    <div className="team-x">
      <div className="service-heading">
        <h3>TEAM</h3>
        <h1>OUR BEST EXPERTISE</h1>
      </div>
      <div className="team">
        <Teambox  teamData={teamData} />
      </div>
    </div>
  );
}

export default Team;
