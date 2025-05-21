import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import bannerBgImage from "../../Assets/newsTrend-banner-bg.png";
import loaderGif from "../../Assets/loader.gif";
import HeroSection from "../../components/Herosection";
import axios from "axios";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id, slug, categorySlug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      //   .get(`https://californiawebcoders.com/wp-json/wp/v2/posts/${slug}?_embed`)
      .get(
        `https://californiawebcoders.com/wp-json/wp/v2/posts?slug=${slug}&_embed`
      )
      //   .then((res) => setPost(res.data))
      .then((res) => {
        if (res.data.length > 0) {
          setPost(res.data[0]); // ✅ set the first post from the array
        } else {
          console.warn("Post not found for slug:", slug);
        }
      })
      .catch((err) => console.error("Error fetching post:", err));
  }, []);

  if (!post)
    return (
      <div className="loader-div">
        <img src={loaderGif} alt="" />
      </div>
    );

  // Get featured image
  const featuredImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "https://via.placeholder.com/800x400";

  return (
    <Layout>
      {/* <HeroSection
        innerBgLayer
        className="blog-detail-banner"
        bgImage={featuredImage}
        title={post.title.rendered}
        // para=""
      /> */}

      <section className="blog-detail-banner mt-4 ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="blog-detail-banner-img">
                <img src={featuredImage} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-detail-content">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <h2
                className="mb-4"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
              <div
                className="post-content"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogDetail;
