/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import services from "../data/services.json";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Servicesbox() {
  return (
    <div className="service-box">
      { 
      services && services.map((service) => {
        return (
          <div key={service.id}>
            <div className="service-img">
              <Image src={service.imagePath} alt="" width={100} height={0}/>
            </div>
            <div className="service-title">
              <h4>{service.title}</h4>
              <p>{service.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Servicesbox;
