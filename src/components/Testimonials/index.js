import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import testimonialimg1 from "../../Assets/testimonialimg1.png";

import "./index.css";
const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Medium devices
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Small devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      name: "Eccila Pinto",
      title: "Businessman",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: testimonialimg1, // Replace with actual image URLs
    },
    {
      name: "Holden Hoffington",
      title: "Businessman",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: testimonialimg1,
    },
    {
      name: "Ricardo Mineriello",
      title: "Businessman",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: testimonialimg1,
    },
    {
      name: "Helena Soretti",
      title: "Businessman",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: testimonialimg1,
    },
    {
      name: "Bill Newman",
      title: "Businessman",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: testimonialimg1,
    },
    {
      name: "Alline Mccoy",
      title: "Businessman",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: testimonialimg1,
    },
  ];

  return (
    <section className="testimonial">
      <div className="container py-5">
        <div className=" mb-5">
          <h6 className="testimonialhead1 text-uppercase text-muted">
            Testimonials
          </h6>
          <h2 className="title">
            Our <span className=" ">clients love working</span> with us
          </h2>
        </div>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-3">
              <div className="card h-100 border-1  ">
                <div className="card-body">
                  <div className="identity  gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="rounded-circle mb-3"
                      style={{ width: "60px", height: "60px" }}
                    />
                    <span>
                    <p className="name">{testimonial.name}</p>
                    <p className="business ">
                      {testimonial.title}
                    </p>
                    </span>
                  </div>
                  <p className="card-text mt-3">{testimonial.text}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
