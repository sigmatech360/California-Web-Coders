import React from "react";
import "./index.css";
import blog1 from "../../Assets/blog1.png";
import blog2 from "../../Assets/blog2.png";
import blog3 from "../../Assets/blog3.png";
import blogbg from "../../Assets/blogbg.png";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "How To Optimize The Content To Be Published To The Website",
      description:
        "Lorem Ipsum Dolor Sit Amet Conset Atetur Adipiscing Elit, Sed Do Eiusmod…...",
      imageUrl: blog1,
    },
    {
      title: "Skills Every Copywriter Should Learn To Become A Professional",
      description:
        "Lorem Ipsum Dolor Sit Amet Conset Atetur Adipiscing Elit, Sed Do Eiusmod…...",
      imageUrl: blog2,
    },
    {
      title: "Creating An Effective Social Media Marketing Campaign 2024",
      description:
        "Lorem Ipsum Dolor Sit Amet Conset Atetur Adipiscing Elit, Sed Do Eiusmod…...",
      imageUrl: blog3,
    },
  ];

  return (
    <section className="BlogSection    ">
      <div className="header-section">
        <img src={blogbg} alt="Blog Header Image" />
      </div>

      <div className="container">
        <div className="blog-blue-head">
          <div className="row">
            <div className="blog-blue-head-content">
              <h2>Let's See Our Latest <br/>Blog & Articles</h2>
              <Link>View All Blogs</Link>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {blogPosts.map((post, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="card blog-card">
                <img
                  src={post.imageUrl}
                  className="card-img-top"
                  alt="Blog Post"
                />
                <div className="mt-2">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.description}</p>
                  <a href="#" className="read-more">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
