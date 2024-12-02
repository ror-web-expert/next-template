import Image from "next/image";
import emoji from "../images/emoji.webp";
import projects from "../data/projects.json";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Processbox() {
  return (
    <div className="pro">
      {
      projects &&
        projects.map((project) => {
          return (
            <div key={project.id}>
              <div className="process-container">
              <div className="process-img">
                <Image src={emoji} alt="" />
              </div>
              <div className="process-heading">
                <h4>{project.title}</h4>
                <h1>{project.content}</h1>
              </div>
            </div>
            </div>
          );
        })}
    </div>
  );
}

export default Processbox;
