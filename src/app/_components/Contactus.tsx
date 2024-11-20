import Image from "next/image";
import web from "../images/web.webp"

function Contactus() {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <div className="contact-header">
          <h6>CONTACT US</h6>
          <h1>GET IN TOUCH</h1>
        </div>
        <div className="contact-input">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email Adress" />
          <input type="phone" placeholder="Phone No." />
          <input type="text" placeholder="Project Title" />
          <input type="text" placeholder="Choose Service" />
          <input className="sep" type="text" placeholder="Message" />
        </div>
        <button className="contact-btn">SUBMIT NOW </button>
      </div>
      <div className="contact-img">
        <Image src={web} alt="" />
      </div>
    </div>
  );
}

export default Contactus;
