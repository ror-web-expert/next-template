/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";

function Blogbox(props: any) {
  return (
    <div className="blogbox-counter">
      <div>
        <Image src={props.image} alt="" />
      </div>
      <div className="blog-head">
        <h2>{props.heading}</h2>
        <p>{props.title}</p>
        <hr />
      </div>
      <div className="blog-foot">
        <p>{props.date}</p>
        <p>{props.count}</p>
      </div>
    </div>
  );
}

export default Blogbox;
