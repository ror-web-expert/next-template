import Image from "next/image";
import moji from "../images/emoji.webp"

/* eslint-disable react/no-unescaped-entities */
function Client() {
  return (
    <div className="client-container">
      <div className="client">
        <div className="client-head">
          <h6>TESTMONIAL</h6>
          <h1>WHAT OUR CLIENTS SAY'S</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ullam
            placeat.
          </p>
        </div>
        <div className="client-box">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            suscipit iusto iure soluta ex sint eveniet voluptate sequi dolorem
            veniam aliquam aspern.
          </p>
          <h1>Devid</h1>
          <h6>CEO & Founder</h6>
          <Image src={moji} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Client;
