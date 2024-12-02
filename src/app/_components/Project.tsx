import Link from "next/link";
import Projectbox from "./Projectbox";
import office1 from "../images/office1.webp"
import office2 from "../images/office2.webp"
import office3 from "../images/office3.webp"
import office4 from "../images/office4.jpg"
import office5 from "../images/office5.png"
import office7 from "../images/office7.webp"
import office8 from "../images/office8.webp"

function Project() {
  return (
    <div>
        <div className="service-heading">
            <h3>PROJECTS</h3>
            <h1>OUR PORTFOLIO</h1>
        </div>
        <div className="project-li">
            <ul>
                <li className="bold-li"><Link href="/">All</Link></li>
                <li><Link href="/">Web Design</Link></li>
                <li><Link href="/">Web Development</Link></li>
                <li><Link href="/">Branding</Link></li>
                <li><Link href="/">Mobile App</Link></li>
                <li><Link href="/">SEO</Link></li>
            </ul>
        </div>
        <div className="project-box">
            <Projectbox image={office1} />
            <Projectbox image={office2} />
            <Projectbox image={office3} />
            <Projectbox image={office4} />
            <Projectbox image={office5} />
            <Projectbox image={office8} />
            <Projectbox image={office7} />
            <Projectbox image={office2} />
        </div>
    </div>
  )
}

export default Project;
