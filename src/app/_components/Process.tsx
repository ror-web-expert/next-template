import Processbox from "./Processbox";
import emoji from '../images/emoji.webp'

function Process() {
  return (
    <div className="process">
        <div className="p-container">
            <Processbox image={emoji} title="Satisfied Clients" heading="18 MI"/>
            <Processbox image={emoji} title="Project Completed" heading="20 MI"/>
            <Processbox image={emoji} title="Project Launched" heading="19 MI"/>
            <Processbox image={emoji} title="Years Completed" heading="50"/>
        </div>
    </div>
  )
}

export default Process;
