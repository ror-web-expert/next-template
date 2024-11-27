/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import logo1 from "../images/logo1.webp"
import logo2 from "../images/logo-2.webp"
import logo3 from "../images/logo3.webp"
import logo4 from "../images/logo4.webp"
import logo5 from "../images/logo5.webp"

function Logo() {
  return (
    <div>
        <div className='logos'>
            <div>
            <a href="">
                <Image src={logo1} alt="" />
            </a>
            </div>
            <div>
            <a href="">
            <Image src={logo2} alt="" />
            </a>
            </div>
            <div>
            <a href="">
            <Image src={logo3} alt="" />
            </a>
            </div>
            <div>
            <a href="">
            <Image src={logo4} alt="" />
            </a>
            </div>
            <div>
            <a href="">
            <Image src={logo5} alt="" />
            </a>
            </div>
        </div>
    </div>
  )
}

export default Logo;
