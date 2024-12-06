/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
// import aws from "../images/aws.webp";
// import logo2 from "../images/logo-2.webp";
// import ibm from "../images/formpipe.webp";
// import logo4 from "../images/logo4.webp";
// import logo5 from "../images/logo5.webp";

function Logo() {
  return (
    <div>
      <div className="logos">
        <div>
          <a href="">
            <Image src="/images/aws.webp" alt="" width={150} height={0}/>
          </a>
        </div>
        <div>
          <a href="">
            <Image src="/images/logo-2.webp" alt="" width={150} height={0}/>
          </a>
        </div>
        <div className="ibm">
          <a href="">
            <Image src="/images/formpipe.webp" alt="" width={150} height={0}/>
          </a>
        </div>
        <div>
          <a href="">
            <Image src="/images/logo4.webp" alt="" width={150} height={0}/>
          </a>
        </div>
        <div>
          <a href="">
            <Image src="/images/logo5.webp" alt="" width={150} height={0}/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Logo;
