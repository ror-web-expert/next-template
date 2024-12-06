/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import aboutus from "../data/about.json";
// import women from "../images/woman2.png"

function Aboutus() {
  return (
    <div id="about">
      <div className="a-container">
        <div className="about-img">
          <Image src="/images/woman2.png" alt="" width={500} height={0} />
        </div>
        {aboutus &&
          aboutus.map((about) => {
            return (
              <div className="aboutus" key={about.id}>
                <h4>{about.name}</h4>
                <h1>{about.heading}</h1>
                <p>{about.content}</p>
                <h5>{about.title}</h5>
                <button className="btn-head">LEARN MORE </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Aboutus;
