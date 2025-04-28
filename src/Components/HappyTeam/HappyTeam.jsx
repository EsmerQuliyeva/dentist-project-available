import React from "react";
import happyTeam from "../../assets/happy-team.jpg";
import doctorSurgery from "../../assets/hekim-esas/doctor-surgery.jpeg"
import doctorProcess from "../../assets/hekim-esas/doctor-process.jpeg";
import profil from "../../assets/hekim-esas/doctor-intro.jpeg"
import BackgroundCircles from "../BackgroundCircles/BackgroundCircles";
import "./HappyTeam.css";
const HappyTeam = () => {
  return (
    <div className="happy-team" data-aos="fade-right">
      <BackgroundCircles />
      <div className="happy-team-images">
        <img src={doctorSurgery} className="happy-team-img" alt="surgery" />
        <div className="happy-team-second-img">
          <img
            src={doctorProcess}
            alt="process"
            className="happy-client-img"
          />
        </div>
      </div>
      <div className="happy-team-descp">
        <button className="about-btn">About us</button>
        <h2>Our team has only one mission:Make you smile</h2>
        <p style={{ fontSize: "20px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          officia, natus, quidem esse deserunt voluptatibus inventore quod
          dolores ut vel eveniet! Quas blanditiis error fuga ea dicta, iure amet
          omnis.
        </p>
        <div className="doc-details">
          <img
            src={profil}
            alt="doctor"
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
          <div className="doc-name-details">
            <p className="doc-name">Dr Andrew Mathew</p>
            <span>Dentist at Global Dentistry</span>
          </div>
        </div>
        <div>
          <button className="book-btn-happy-team" id="happy-team-btn">
            About our clinic
          </button>
        </div>
      </div>
    </div>
  );
};

export default HappyTeam;
