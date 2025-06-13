import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import testimonialimg1 from "../../Assets/testimonialimg1.png";
import beauCooper from "../../Assets/beauCooper.png";
import Carlo from "../../Assets/Carlo.png";
import joe from "../../Assets/joe.png";


import HoldenHoffington from "../../Assets/HoldenHoffington.png";
import RicardoMineriello from "../../Assets/RicardoMineriello.png";
import JessyMatayer from "../../Assets/JessyMatayer.png";


import HelenaSoretti from "../../Assets/HelenaSoretti.png";
import BillNewman from "../../Assets/BillNewman.png";
import AllineMccoy from "../../Assets/AllineMccoy.png";

import "./index.css";

const testimonials = [
  {
    name: "Nelson Ventura",
    title: "E-commerce owner",
    text: "Troy and Jay from California Web Coders were quick, professional, and truly understood my logo vision. The final design was high-quality and spot-on. Highly efficient and collaborative team.",
    image: HoldenHoffington,
  },
  {
    name: "Jessy Matayer",
    title: "Businessman",
    text: "Troy Maxwell created an amazing logo and flyer for me. The work was excellent, and I’m very happy with the result. Highly recommended for anyone needing design help.😊",
    image: RicardoMineriello,
  },
  {
    name: "Eduardo Domingo",
    title: "Marketing director",
    text: "Troy and Matthew guided me through logo design with helpful advice and fair pricing. The final result exceeded my expectations. I truly appreciated their attention and professionalism.",
    image: BillNewman,
  },
  {
    name: "LJC Homes",
    title: "Data analyst",
    text: "The team went beyond expectations to perfect my logo design. Their dedication and flexibility impressed me. I’ll definitely work with them again for future logo projects and design needs.",
    image: AllineMccoy,
  },
];
const testimonials2 = [
  {
    name: "Rodney Winston",
    title: "Digital strategist",
    text: "Working with John Byers and California Web Coders was seamless. They answered all my questions promptly and delivered exactly what I needed. Looking forward to collaborating with them again soon.",
    image: HelenaSoretti,
  },
  {
    name: "Beau Cooper",
    title: "Businessman",
    text: "California Web Coders built my website fast and made it look great. The price was fair, and the team was easy to work with. I’m very satisfied with the outcome.",
    image: beauCooper,
  },
  {
    name: "Joe Joe",
    title: "Creative director",
    text: "Web Coders delivered excellent work for the ABA Caribbean League. Special thanks to Troy Maxwell and Jay Scott. We’ll definitely be coming back to them for future projects.",
    image: joe,
  },
  {
    name: "Carlo Grassetti",
    title: "Content creator",
    text: "Alex was patient, knowledgeable, and supportive throughout the process. He went above and beyond to meet my needs. Great experience working with him and California Web Coders overall.",
    image: Carlo,
  },
];

const Testimonial = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    centerMode: true,
    centerPadding: "10px",
    speed: 3000,
    slidesToShow: 4,
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

  return (
    <section className="testimonial">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
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
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="testimonial-cards mb-4">
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
            <div className="testimonial-cards">
              <Slider {...settings} rtl={true}>
                {testimonials2.map((testimonial, index) => (
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
