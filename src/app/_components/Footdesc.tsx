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
            <span>Samar</span>
          </a>
        </div>
        <div className="foot-mail">
          <h1>+91 987-654-3210</h1>
          <h2>info@example.com</h2>
        </div>
        <div className="foot-adress">
          <h1>1247/Plot No. 39, 15th Phase, Colony.</h1>
          <h2>Kkatpally, Hyderabad</h2>
        </div>
      </div>
      <hr />

      <div className="footer-lower">
        <div className="foot-about">
          <h1>ABOUT US</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            id soluta illum eaque in quaerat saepe deleniti earum, aperiam ex!
          </p>
        </div>
        <div className="foot-links">
          <h1>OUR LINKS</h1>
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
          <h1>OUR SERVICES</h1>
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
          <h1>OTHER LINKS</h1>
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
