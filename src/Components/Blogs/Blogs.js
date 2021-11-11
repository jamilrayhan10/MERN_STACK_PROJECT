import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="py-5 my-5 container">
      <div className="my-3">
        <h2 className="text-center fw-bolder ">
          Our <span className="text-danger">Blogs</span>
        </h2>
        <div className="row">
          {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog}></Blog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
