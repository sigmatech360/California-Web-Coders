import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import loaderGif from "../../Assets/loader.gif";
import { Link } from "react-router-dom";
import Layout from "../../components/layout";
import HeroSection from "../../components/Herosection";

const CategoryPage = () => {
  const { categorySlug } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(null);

  const baseURL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    // Fetch categories to find matching slug
    axios
      .get(`${baseURL}/categories`)
      .then((res) => {
        const matched = res.data.find((cat) => cat.slug === categorySlug);
        if (matched) {
          setCategoryId(matched.id);
        } else {
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error("Category fetch error:", err);
        setLoading(false);
      });
  }, [categorySlug]);

  useEffect(() => {
    if (!categoryId) return;

    setLoading(true);
    axios
      .get(
        `${baseURL}/posts?categories=${categoryId}&_embed`
      )
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Post fetch error:", err);
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return (
      <div className="loader-div text-center py-5">
        <img src={loaderGif} alt="Loading..." />
      </div>
    );
  }

  return (
    <>
      <Layout>
        <HeroSection
        //   innerBgLayer
          // className="blog-detail-banner"
          //   bgImage={featuredImage}
          title={categorySlug.replace("-", " ")}
          para={`Blogs / Category / ${categorySlug.replace("-", " ")}`}
        />
        <section className="Trends blog-with-sidebar">
          <div className="container">
            <div className="row">
              <h2 className="mb-4 text-capitalize">
                {categorySlug.replace("-", " ")}
              </h2>
              {posts.length > 0 ? (
                posts.map((post, index) => {
                  const image =
                    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                    "https://via.placeholder.com";
                  return (
                    <div className="col-lg-4 col-md-6 mb-4" key={index}>
                      <div className="card blog-card wordpressBlogCard">
                        <img src={image} className="card-img-top" alt="Post" />
                        <div className="mt-2">
                          <h5>{post.title.rendered}</h5>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: post.excerpt.rendered,
                            }}
                          />
                          {/* <Link to={`/blog/${post.slug}`} className="read-more"> */}
                          <Link
                            to={`/blog/${post.slug}`}
                            className="read-more"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p>No posts found for this category.</p>
              )}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default CategoryPage;
