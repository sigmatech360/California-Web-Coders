import React from 'react'
import { BsEmojiSmileFill } from 'react-icons/bs'
import { HiSpeakerphone } from 'react-icons/hi'
import { IoBriefcase } from 'react-icons/io5'

const CustomExperience = () => {
  return (
    <section className='custom-experience-sec'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="custom-experience-txt">
                        <h2>We are a creative bold digital agency based in <span>California.</span></h2>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="custom-experience-define">
                        <h4>20+</h4>
                        <div className="custom-experience-txt">
                            <h5>20+ Years of Experience</h5>
                            <p>We are dedicated to providing outstanding digital and design services meet the functional and aesthetic.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="experience-short-txt">
                        <h6><span>350+</span> very satisfied clients around the worldwide.</h6>
                        <span><BsEmojiSmileFill /></span>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="experience-short-txt">
                        <h6><span>200+</span> good award winning digital media agency.</h6>
                        <span><HiSpeakerphone /></span>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="experience-short-txt">
                        <h6><span>750+</span> successfully project completed in one year.</h6>
                        <span><IoBriefcase /></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CustomExperience