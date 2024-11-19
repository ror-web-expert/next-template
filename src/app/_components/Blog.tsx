import Blogbox from "./Blogbox";
import valley from "../images/valley.webp";
import snow from "../images/snow2.jpg"

function Blog() {
  return (
    <div>
      <div className="price-heading">
        <h6>BLOG</h6>
        <h1>LATEST BLOG & NEWS</h1>
      </div>
      <div className="blog-counter">
        <Blogbox
          image={valley}
          heading="Red Valley of Russian in snow fall khanjrab express"
          title="Lorem ipsum dolor sit amet in amet adipisicing elit. Aperiam to the adisopsing emit."
          date="02 Sep,2024"
          count="15"
        />
        <Blogbox
          image={snow}
          heading="Red Valley of Russian in snow fall khanjrab express"
          title="Lorem ipsum dolor sit amet in amet adipisicing elit. Aperiam to the adisopsing emit."
          date="02 Sep,2024"
          count="15"
        />
        <Blogbox
          image={valley}
          heading="Red Valley of Russian in snow fall khanjrab express"
          title="Lorem ipsum dolor sit amet in amet adipisicing elit. Aperiam to the adisopsing emit."
          date="02 Sep,2024"
          count="15"
        />
      </div>
    </div>
  );
}

export default Blog;
