/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Servicesbox(props:any) {
  return (
    <div className="service-box">
      <div className="service-img">
        <Image src={props.image} alt=""/>
      </div>
      <div className="service-title">
        <h2>{props.title}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quod
          natus est eaque consequatur.
        </p>
      </div>
    </div>
  );
}

export default Servicesbox;
