import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaYoutubeSquare } from 'react-icons/fa'
import { FaSquarePinterest, FaSquareXTwitter } from 'react-icons/fa6'
import PersonalInformationBox from '../PersonalInformationBox'
import { MdOutlineMailOutline } from 'react-icons/md'
import { IoSpeedometer } from 'react-icons/io5'

const CustomGetInTouch = () => {

    const infoData = [
  {
    Icon: <FaMapMarkerAlt />,
    miniHead: "Head Office",
    miniPara: "225 Broadway, San Diego, CA 92101, United States",
  },
  {
    Icon: <MdOutlineMailOutline />,
    miniHead: "Email Us",
    miniPara: "support@yourdomain.tld </br>  hello@yourdomain.tld",
  },
  {
    Icon: <FaPhoneAlt  />,
    miniHead: "Call us",
    miniPara: "+1 619-798-9688 </br>  +1 619-798-9688",
  },
   {
    Icon: <IoSpeedometer />,
    miniHead: "24/7 Premium Support",
    miniPara: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
  },
];

  return (
    <section className='custom-getintouch-sec'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <PersonalInformationBox infoData={infoData} />
                </div>
                <div className="col-lg-6">
                    <div className="custom-getintouch-txt">
                        <h6>Get In Touch</h6>
                        <h2>Don't Hesitate To Contact Us For <span>More Information</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <div className="getintouch-follow">
                            <h4>Follow Our Social Network</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            <ul>
                                <li><FaFacebookSquare /></li>
                                <li><FaInstagramSquare /></li>
                                <li><FaLinkedin /></li>
                                <li><FaYoutubeSquare /></li>
                                <li><FaSquareXTwitter /></li>
                                <li><FaSquarePinterest /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CustomGetInTouch