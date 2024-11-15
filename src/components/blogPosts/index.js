import React from "react";
import "./index.css";
import blog1 from "../../Assets/blog1.png";
import blog2 from "../../Assets/blog2.png";
import blog3 from "../../Assets/blog3.png";

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
      
      </div>


      <div className="container">
          <div className="row blowheader">
            {/* Header Section */}
            <div className=" col-md-6     mb-5 p-4 rounded">
              <h2 className="title">Let's See Our Latest Blog & Articles</h2>
            </div>
            <div className=" col-md-6  btnview      ">
            <button className="btn btnview btn-light mt-3">View All Blogs</button>
            </div>
          </div>
       
      {/* Blog Grid */}
      <div className="row py-5">
        {blogPosts.map((post, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card blog-card">
              <img
                src={post.imageUrl}
                className="card-img-top"
                alt="Blog Post"
              />
              <div className="mt-4">
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
