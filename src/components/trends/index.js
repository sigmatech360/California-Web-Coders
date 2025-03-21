import React from "react";
import "./index.css";
import trendimg1 from "../../Assets/trendimg1.png";
import trendimg2 from "../../Assets/trendimg2.png";
import trendimg3 from "../../Assets/trendimg3.png";
const Trends = () => {
  const blogData = [
    {
      image: trendimg1,
      title: "How To Optimize The Content To Be Published To The Website",
      description:
        "Lorem Ipsum Dolor Sit Amet Conset Atetur Adipiscing Elit, Sed Do Eiusmod",
    },
    {
      image: trendimg2,
      title: "Skills Every Copywriter Should Learn To Become A Professional",
      description:
        "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit, Sed Do Eiusmod...",
    },
    {
      image: trendimg3,
      title: "Creating An Effective Social Media Marketing Campaign 2024",
      description:
        "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit, Sed Do Eiusmod...",
    },
    {
      image: trendimg1,
      title: "How To Optimize The Content To Be Published To The Website",
      description:
        "Lorem Ipsum Dolor Sit Amet Conset Atetur Adipiscing Elit, Sed Do Eiusmod",
    },
    {
      image: trendimg2,
      title: "Skills Every Copywriter Should Learn To Become A Professional",
      description:
        "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit, Sed Do Eiusmod...",
    },
    {
      image: trendimg3,
      title: "Creating An Effective Social Media Marketing Campaign 2024",
      description:
        "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit, Sed Do Eiusmod...",
    },
    {
      image: trendimg1,
      title: "How To Optimize The Content To Be Published To The Website",
      description:
        "Lorem Ipsum Dolor Sit Amet Conset Atetur Adipiscing Elit, Sed Do Eiusmod",
    },
    {
      image: trendimg2,
      title: "Skills Every Copywriter Should Learn To Become A Professional",
      description:
        "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit, Sed Do Eiusmod...",
    },
    {
      image: trendimg3,
      title: "Creating An Effective Social Media Marketing Campaign 2024",
      description:
        "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit, Sed Do Eiusmod...",
    },
  ];

  return (
    <section className="Trends">
      <div className="container">
        <div className="row">
          {blogData.map((blog, index) => (
            <>
              <div className="col-lg-4 col-md-6 mb-4" key={index}>
                <div className="card blog-card">
                  <img
                    src={blog.image}
                    className="card-img-top"
                    alt="Blog Post"
                  />
                  <div className="mt-2">
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text">{blog.description}</p>
                    <a href="#" className="read-more">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trends;
