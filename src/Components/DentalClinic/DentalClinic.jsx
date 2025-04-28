import React from "react";
import surgery from "../../assets/hekim-esas/doctor-surgery-2.jpeg";
import "./DentalClinic.css";
const DentalClinic = () => {
  return (
    <div className="about-page-first">
      <h1>We are Dentalic, a dental clinic you can trust</h1>
      <p>We are Dentalic, a dental clinic you can trust</p>
      <img src={surgery} alt="about-client" className="about-client" />
    </div>
  );
};

export default DentalClinic;
