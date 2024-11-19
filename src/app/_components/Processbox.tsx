import Image from "next/image"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Processbox(props:any) {
  return (
    <div className="process-container">
        <div className="process-img">
            <Image src={props.image} alt="" />
        </div>
        <div className="process-heading">
            <p>{props.title}</p>
            <h1>{props.heading}</h1>
        </div>
    </div>
  )
}

export default Processbox
