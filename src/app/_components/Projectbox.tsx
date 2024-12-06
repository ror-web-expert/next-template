/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";

function Projectbox(props:any) {
  return (
    <div className="project-container">
        <div className="project-img">
            <Image src={props.image} alt="" width={300} height={0}/>
        </div>
    </div>
  )
}

export default Projectbox;
