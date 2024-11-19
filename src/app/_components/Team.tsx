import Teambox from "./Teambox"
import men1 from '../images/men1.png'
import girl from '../images/girl.jpg'
import men2 from '../images/men2.webp'

function Team() {
  return (
    <div className="team">
        <div className="service-heading">
            <h6>TEAM</h6>
            <h1>OUR BEST EXPERTISE</h1>
        </div>
        <div className="team-container">
            <Teambox image={men1} heading="Domina Li" title="SENIOR DESIGNER"/>
            <Teambox image={girl} heading="Alina Jia" title="SENIOR DESIGNER"/>
            <Teambox image={men2} heading="Suresh Doe" title="SENIOR DESIGNER"/>
        </div>
    </div>
  )
}

export default Team
