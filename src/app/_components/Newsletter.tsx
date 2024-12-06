import Image from "next/image";
// import network from "../images/network.jpg";

function Newsletter() {
  return (
    <div className="newsletter">
      <div className="news-image">
        <Image src="/images/network.jpg" alt="" width={250} height={200}/>
      </div>
      <div className="news-head">
        <h3>NEWSLETTER</h3>
        <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
        <p>
          Stay ahead with the latest updates, insights, and innovations from our
          team. Subscribe to our newsletter and never miss out!
        </p>
        <input type="text" placeholder="Email Adress" />
      </div>
    </div>
  );
}

export default Newsletter;
