/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import aboutus from '../data/about.json'
import women from "../images/woman2.png"

function Aboutus() {
  return (
    <div className="a-container">
      <div className="about-img">
        <Image src={women} alt='' />
      </div>
      {
       aboutus && aboutus.map(about=>{
          return(
            <div className="aboutus" key={about.id}>
        <h6>{about.name}</h6>
        <h1>{about.heading}</h1>
        <p>{about.content}</p>
        <h2>{about.title}</h2>
        <button className="btn-head">LEARN MORE </button>
      </div>
          )
        })
      }
    </div>
  );
}

export default Aboutus;
