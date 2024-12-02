/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";

function Teambox(props:any) {
  return (
    <div>
      <div className="team-image">
        <Image src={props.image} alt="" />
      </div>
      <div className="team-boxes">
        <h3>{props.heading}</h3>
        <h6>{props.title}</h6>
      </div>
    </div>
  )
}

export default Teambox;
