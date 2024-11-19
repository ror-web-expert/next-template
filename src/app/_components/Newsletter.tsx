import Image from "next/image";
import network from "../images/network.jpg";

function Newsletter() {
  return (
    <div className="newsletter">
      <div className="news-image">
        <Image src={network} alt="" />
      </div>
      <div className="news-head">
        <h6>NEWSLETTER</h6>
        <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, possimus!
          Repellat, distinctio repudiandae!
        </p>
        <input type="text" placeholder="Email Adress" />
      </div>
    </div>
  );
}

export default Newsletter;
