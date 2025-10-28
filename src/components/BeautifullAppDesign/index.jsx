import React, { useState } from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import FormModal from '../FormModal'

const BeautifullAppDesign = () => {
    const [showModal, setShowModal] = useState(false);
  return (
    <section className='beautiful-app-sec'>
        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                    <div className="beautiful-app-txt">
                        <h2>App Interfaces that Feel Effortless</h2>
                        <p>Our iOS apps feature intuitive, user-friendly interfaces built for interaction and conversion. Every element from layout to micro-animation is designed for simplicity, elegance, and easy navigation. We focus on fluid performance, accessibility, and user enjoyment to keep your audience engaged and loyal.</p>
                        <div className="beautifull-app-flex">
                        <button  onClick={() => setShowModal(true)}>Get App Design Quote</button>
                         <div className="about-number">
                            <span><FaPhoneAlt /></span>
                            <p> +1 619-798-9688</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FormModal show={showModal} handleClose={() => setShowModal(false)} />
    </section>
    
  )
}

export default BeautifullAppDesign