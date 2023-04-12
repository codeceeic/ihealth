import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { AiOutlineDoubleRight } from "react-icons/ai";

const services = () => {
  const serviceInfoData = [
    {
      title: "Medical Provider Lookup",
      text:
        " Our platform allows patients to easily search for and connect with healthcare providers who specialize in treating complex diseases.",
    },
    {
      title: "Electronic Health Records (EHR) integration",
      text:
        " Our platform integrates directly with all major EHR systems, ensuring that patients have access to the most up-to-date and accurate provider information.",
    },
    {
      title: "Medical and Wellness Social Networking",
      text:
        " We provide patients with access to a social networking platform focused on medical and wellness topics related to complex diseases.",
    },
    {
      title: "Patient Advocacy",
      text:
        " Our organization advocates for patients and their families by working to improve the overall quality of care and access to treatment options for individuals living with complex diseases.",
    },
  ];
  return (
    <div className="service-section-wrapper">
      <div className="service-section-top">
        <h1 className="primary-heading">Our Services</h1>
        <span className="primary-sub-heading">
          Learn more about the various services offered by Our Clinic and how we
          provide you with world-class care.
        </span>
      </div>

      <div className="gradient"></div>

      <div className="service-container">
        {serviceInfoData.map((data) => (
          <div className="service-info">
            <h2>{data.title}</h2>
            <span>{data.text}</span>

            <Link className="service-link" to={"/services"}>
              Learn More <AiOutlineDoubleRight className="icon" />
            </Link>
          </div>
        ))}
        ;
      </div>
    </div>
  );
};

export default services;
