/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

function Footdesc() {
  return (
    <div className="foot-desc">
      <div className="foot-1st">
        <div className="logo-foot">
          <a href="#" className="font-bold text-2xl sm:text-3xl flex ">
            <img
              style={{ width: 150 }}
              src="https://cdn.pixabay.com/photo/2016/11/07/13/04/yoga-1805784_1280.png"
              alt="logo"
            />
            <span>NexonDev</span>
          </a>
        </div>
        <div className="foot-mail">
          <h5>+91 987-654-3210</h5>
          <h6>info@example.com</h6>
        </div>
        <div className="foot-adress">
          <h5>1247/Plot No. 39, 15th Phase, Colony.</h5>
          <h6>Kkatpally, Hyderabad</h6>
        </div>
      </div>
      <hr />

      <div className="footer-lower">
        <div className="foot-about">
          <h4>ABOUT US</h4>
          <p>
            We are a forward-thinking software company dedicated to delivering
            innovative solutions that drive success. With a passion for
            technology and a focus on excellence, we empower businesses to
            achieve their goals
          </p>
        </div>
        <div className="foot-links">
          <h4>OUR LINKS</h4>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About Us</Link>
            </li>
            <li>
              <Link href="/">Services</Link>
            </li>
            <li>
              <Link href="/">Team</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="foot-links">
          <h4>OUR SERVICES</h4>
          <ul>
            <li>
              <Link href="/">Strategy & Research</Link>
            </li>
            <li>
              <Link href="/">Web Development</Link>
            </li>
            <li>
              <Link href="/">Web Solution</Link>
            </li>
            <li>
              <Link href="/">Digital Marketing</Link>
            </li>
            <li>
              <Link href="/">App Design</Link>
            </li>
          </ul>
        </div>
        <div className="foot-links">
          <h4>OTHER LINKS</h4>
          <ul>
            <li>
              <Link href="/">FAQ</Link>
            </li>
            <li>
              <Link href="/">Portfolio</Link>
            </li>
            <li>
              <Link href="/">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/">Support</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footdesc;
