import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import { Link } from "react-router-dom";

import loaderGif from "../../Assets/loader.gif";

const Trends = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const baseURL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    axios
      .get(`${baseURL}/categories`)
      .then((res) => {
        setCategories(res.data);
        console.log("categories", res.data);
      })
      .catch((err) => console.error("Category Error:", err));
  }, []);

  useEffect(() => {
    setLoading(true);
    const url = activeCategory
      ? `${baseURL}/posts?categories=${activeCategory}&_embed`
      : `${baseURL}/posts?_embed`;

    axios
      .get(url)
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
        setLoading(false);
      });
  }, [activeCategory]);

  console.log("posts", posts);
  console.log("activeCategory", activeCategory);

  return (
    <section className="Trends blog-with-sidebar">
      <div className="container">
        <div className="row flex-md-row flex-column-reverse">
          <div className="col-md-9">
            {loading ? (
              <div className="loader-div">
                <img src={loaderGif} alt="Loading..." />
              </div>
            ) : (
              <div className="row">
                {posts.map((post, index) => {
                  const title = post.title.rendered;
                  const excerpt = post.excerpt.rendered;
                  const image =
                    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                    "https://via.placeholder.com"; // fallback image

                  return (
                    <div className="col-xl-4 col-md-6 mb-4" key={index}>
                      <div
                        className="card blog-card wordpressBlogCard"
                        data-aos="fade-up"
                        // data-aos-duration="2000"
                        data-aos-delay={index * 200}
                      >
                        <Link to={`/blog/${post.slug}`}>
                          <img
                            src={image}
                            className="card-img-top"
                            alt="Blog Post"
                          />
                        </Link>
                        <div className="mt-2">
                          <Link to={`/blog/${post.slug}`}>
                            <h5 className="card-title">{title}</h5>
                          </Link>
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
              </div>
            )}
          </div>

          <div className="col-md-3">
            <div className="category-sidebar">
              <h5>Categories</h5>
              <ul className="list-group">
                <li
                  className={`list-group-item ${
                    activeCategory === null ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory(null)}
                >
                  All
                </li>
                {/* {categories.map((cat) => (
                  <li
                    key={cat.id}
                    className={`list-group-item ${
                      activeCategory === cat.id ? "active" : ""
                    }`}
                    onClick={() => setActiveCategory(cat.id)}
                  >
                    {cat.name}
                  </li>
                ))} */}
                {categories.map((cat) => (
                  <li key={cat.id} className="list-group-item">
                    <Link to={`/blog/category/${cat.slug}`}>{cat.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trends;
