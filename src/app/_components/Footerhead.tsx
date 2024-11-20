import Image from "next/image";
import office from "../images/office2.webp";

function Footerhead() {
  return (
    <div>
      <div className="foot-img">

        <Image src={office} alt="" />

        <div className="foot-head">
          <h1>YOU WANT TO SHOWCASE YOUR WEBSITE</h1>
          <button className="foot-btn">JOIN NOW</button>
        </div>
        
      </div>
    </div>
  );
}

export default Footerhead;
