import Servicesbox from "./Servicesbox"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import Image from "next/image"
import service from '../images/service.jpg'

function Services() {
  return (
    <div>
        <div className="service-heading">
            <h6>SERVICES</h6>
            <h1>PROVIDE AWESOME SERVICE</h1>
        </div>
        <div className="s-container">
            <Servicesbox image={service} title="Strategy & Research"/>
            <Servicesbox image={service} title="Web Development"/>
            <Servicesbox image={service} title="Web Solution"/>
        </div>
    </div>
  )
}

export default Services
