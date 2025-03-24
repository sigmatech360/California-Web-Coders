import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import testimonialimg1 from "../../Assets/testimonialimg1.png";

import "./index.css";
const Testimonial = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    speed: 3000,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  const testimonials = [
    {
      name: "Eccila Pinto",
      title: "Businessman",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
      image: testimonialimg1, // Replace with actual image URLs
    },
    {
      name: "Holden Hoffington",
      title: "Businessman",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
      image: testimonialimg1,
    },
    {
      name: "Ricardo Mineriello",
      title: "Businessman",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
      image: testimonialimg1,
    },
    {
      name: "Helena Soretti",
      title: "Businessman",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
      image: testimonialimg1,
    },
    {
      name: "Bill Newman",
      title: "Businessman",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
      image: testimonialimg1,
    },
    {
      name: "Alline Mccoy",
      title: "Businessman",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
      image: testimonialimg1,
    },
  ];

  return (
    <section className="testimonial">
      <div className="container">
        <div class="row">
          <div class="col-md-12">
            <div className="testimonial-head">
              <h6
                className="testimonialhead1"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-offset="0"
              >
                Testimonials
              </h6>
              <h2
                className="title"
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-offset="0"
              >
                Our <span className=" ">clients love working</span> with us
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="testimonial-cards mb-4">
              <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                  <div className="testimonial-card" key={index}>
                    <div className="testimonial-card-head">
                      <div className="testimonial-img">
                        <img src={testimonial.image} alt={testimonial.name} />
                      </div>
                      <div className="testimonial-card-head-text">
                        <p className="name">{testimonial.name}</p>
                        <p className="business ">{testimonial.title}</p>
                      </div>
                    </div>
                    <p className="testimonial-card-body">{testimonial.text}</p>
                  </div>
                ))}
              </Slider>
            </div>
            <div class="testimonial-cards">
              <Slider {...settings} rtl={true}>
                {testimonials.map((testimonial, index) => (
                  <div className="testimonial-card" key={index}>
                    <div className="testimonial-card-head">
                      <div className="testimonial-img">
                        <img src={testimonial.image} alt={testimonial.name} />
                      </div>
                      <div className="testimonial-card-head-text">
                        <p className="name">{testimonial.name}</p>
                        <p className="business ">{testimonial.title}</p>
                      </div>
                    </div>
                    <p className="testimonial-card-body">{testimonial.text}</p>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
