import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import testimonialimg1 from "../../Assets/testimonialimg1.png";


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
    title: "Businessman",
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
    title: "Businessman",
    text: "Troy and Matthew guided me through logo design with helpful advice and fair pricing. The final result exceeded my expectations. I truly appreciated their attention and professionalism.",
    image: BillNewman,
  },
  {
    name: "LJC Homes",
    title: "Businessman",
    text: "The team went beyond expectations to perfect my logo design. Their dedication and flexibility impressed me. I’ll definitely work with them again for future logo projects and design needs.",
    image: AllineMccoy,
  },
];
const testimonials2 = [
  {
    name: "Rodney Winston",
    title: "Businessman",
    text: "Working with John Byers and California Web Coders was seamless. They answered all my questions promptly and delivered exactly what I needed. Looking forward to collaborating with them again soon.",
    image: HelenaSoretti,
  },
  {
    name: "Beau Cooper",
    title: "Businessman",
    text: "California Web Coders built my website fast and made it look great. The price was fair, and the team was easy to work with. I’m very satisfied with the outcome.",
    image: HoldenHoffington,
  },
  {
    name: "Joe Joe",
    title: "Businessman",
    text: "Web Coders delivered excellent work for the ABA Caribbean League. Special thanks to Troy Maxwell and Jay Scott. We’ll definitely be coming back to them for future projects.",
    image: testimonialimg1,
  },
  {
    name: "Carlo Grassetti",
    title: "Businessman",
    text: "Alex was patient, knowledgeable, and supportive throughout the process. He went above and beyond to meet my needs. Great experience working with him and California Web Coders overall.",
    image: testimonialimg1,
  },
];

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
