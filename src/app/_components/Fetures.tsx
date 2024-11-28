/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import fetures from "../images/fetures.jpg";

function Fetures() {
  return (
    <div className="f-container">
      <div className="">
        <div className="f-header">
        <h6>FETURES</h6>
        <h1>OUR WORK FLOW</h1>
        </div>
        <div className="flexes">
        <div className="fetures-img">
          <Image src={fetures} alt="" />
        </div>
        <div className="fetures-head">
            <h1>Idea & Analysis Gathering</h1>
            <p>At NexDev, we turn your ideas into actionable insights through expert analysis, ensuring tailored, innovative software solutions.</p>
        </div>
      </div>
      <div className="flexes scnd-flx">
        <div className="fetures-img">
          <Image src={fetures} alt="" />
        </div>
        <div className="fetures-head">
            <h1>Design & Developing</h1>
            <p>Take advantage of UI/UX design services to gain eye-catching aesthetics for your software. Let’s design an interface that boosts customer retention.</p>
        </div>
      </div>
      <div className="flexes">
        <div className="fetures-img">
          <Image src={fetures} alt="" />
        </div>
        <div className="fetures-head">
            <h1>Testing & Launching</h1>
            <p>We know the difference between success and excellence which is why we only provide professional work. To ensure credibility, we offer QA & testing as a separate service.</p>
        </div>
      </div>
      </div>
      <div className="feature-img">
        <img
          src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_1280.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Fetures;
