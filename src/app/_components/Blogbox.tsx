import Image from "next/image";
import blogs from "../data/blogs.json";
import wordpress from "../images/Untitled-design-16.webp"

function Blogbox() {
  return (
    <div className="pro">
      {blogs &&
        blogs.map((blog) => {
          return (
            <div key={blog.id}>
              <div className="blogbox-counter">
                <div>
                  <Image src={wordpress} alt="" />
                </div>
                <div className="blog-head">
                  <h2>{blog.title}</h2>
                  <p>{blog.content}</p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Blogbox;
