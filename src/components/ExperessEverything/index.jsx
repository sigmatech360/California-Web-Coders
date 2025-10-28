import React, { useEffect, useState } from "react";
import PersonalInformationBox from "../PersonalInformationBox";
import { RiSecurePaymentFill, RiTeamFill } from "react-icons/ri";
import { GrCertificate } from "react-icons/gr";
import { IoIosSpeedometer } from "react-icons/io";


const ProgressBar = ({ title, value }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = 0;
    const timer = setInterval(() => {
      if (start < value) {
        start++;
        setProgress(start);
      } else {
        clearInterval(timer);
      }
    }, 15);
    return () => clearInterval(timer);
  }, [value]);


   return (
    <div className="service-progress-bar">
      <div className="progress-top">
        <h5>{title}</h5>
      </div>
      <div className="progress-container">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ><span>{progress}%</span></div>
      </div>
    </div>
  );
};


const ExperessEverything = () => {
  const infoData = [
    {
      Icon: <RiSecurePaymentFill />,
      miniHead: "Smart & secure system",
      miniPara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
    },
    {
      Icon: <GrCertificate />,
      miniHead: "Certified Expert",
      miniPara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
    },
    {
      Icon: <RiTeamFill />,
      miniHead: "Professional team",
      miniPara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
    },
    {
      Icon: <IoIosSpeedometer />,
      miniHead: "24/7 Premium Support",
      miniPara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
    },
  ];

   const progressData = [
    { title: "Design Graphics & 3D Design", value: 90 },
    { title: "Marketing", value: 75 },
    { title: "Animations", value: 85 },
    { title: "Programming", value: 95 },
  ];

  return (
    <section className="experess-everything-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="express-everything-txt">
              <h4>Express Everything And Feel Everything</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type.
              </p>
             {progressData.map((item, index) => (
                <ProgressBar key={index} title={item.title} value={item.value} />
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <PersonalInformationBox infoData={infoData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperessEverything;
