import React from "react";
import "./Blog.css";

const Blog = (props) => {
  const { title, body } = props.blog;
  return (
    <div className="col-lg-3 my-2 ">
      <div className="card myCardDesign">
        <div className="card-body">
          <h5 className="card-title"> {title}</h5>
          <p className="card-text">{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
