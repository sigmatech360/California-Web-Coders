import React from 'react'
import { Link } from 'react-router-dom'
import reactbanner1 from "../../Assets/newChildPagesAssets/reactdevelopment/react-banner-1.webp"
import reactbanner2 from "../../Assets/newChildPagesAssets/reactdevelopment/react-banner-2.webp"
import reactbanner3 from "../../Assets/newChildPagesAssets/reactdevelopment/react-banner-3.webp"
import reactbanner4 from "../../Assets/newChildPagesAssets/reactdevelopment/react-banner-4.webp"
import reactbanner5 from "../../Assets/newChildPagesAssets/reactdevelopment/react-banner-5.webp"


const ReactHeroBanner = () => {
  return (
    <section className='react-hero-banner'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="react-hero-banner-txt">
                        <h2>High-Performance <span>React Development</span> for Modern Web Apps</h2>
                        <p>Our React experts build lightning-fast, interactive, and scalable front-end solutions that deliver an exceptional user experience across every device.</p>
                        <Link to="/our-work">View Portfolio</Link>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="react-banner-images">
                        <img src={reactbanner5} alt="img" />
                        <img src={reactbanner4} alt="img" />
                        <img src={reactbanner3} alt="img" />
                        <img src={reactbanner2} alt="img" />
                        <img src={reactbanner1} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ReactHeroBanner