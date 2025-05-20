import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import trendimg1 from "../../Assets/trendimg1.png";
import trendimg2 from "../../Assets/trendimg2.png";
import trendimg3 from "../../Assets/trendimg3.png";
import { Link } from "react-router-dom";

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

const Trends = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://californiawebcoders.com/wp-json/wp/v2/posts?_embed")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  console.log("posts", posts);

  return (
    <section className="Trends">
      <div className="container">
        <div className="row">
          {posts.map((post, index) => {
            const title = post.title.rendered;
            const excerpt = post.excerpt.rendered;
            const image =
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
              "https://via.placeholder.com/300x200"; // fallback image

            return (
              <div className="col-lg-4 col-md-6 mb-4" key={index}>
                <div
                  className="card blog-card wordpressBlogCard"
                  data-aos="fade-up"
                  // data-aos-duration="2000"
                  data-aos-delay={index * 200}
                >
                  <img src={image} className="card-img-top" alt="Blog Post" />
                  <div className="mt-2">
                    <h5 className="card-title">
                      {title}
                    </h5>
                    <p
                      className="card-text"
                      dangerouslySetInnerHTML={{ __html: excerpt }}
                    />
                    <Link
                      // href={post.link}
                      to={`/blog/${post.slug}`}
                      className="read-more"
                      // target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}

          {/* {blogData.map((blog, index) => (
            <>
              <div className="col-lg-4 col-md-6 mb-4" key={index}>
                <div
                  className="card blog-card"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
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
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default Trends;
