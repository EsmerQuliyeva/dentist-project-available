import React from "react";
import doctorInterview from "../../assets/hekim-esas/interview.jpeg";
import "./HappyClient.css";
const HappyClient = () => {
  return (
    <div className="happy-ill-container" id="happy-client">
      <div className="happy-ill">
        <div className="happy-ill-first">
          <h1>
            Schedule a virtual or<br></br>presential appointment{" "}
          </h1>
          <button className="book-btn-happy-client" id="happy-client-book-btn">
            Book an appointment
          </button>
        </div>
        <div className="happy-ill-second">
          <img src={doctorInterview} alt="interview" />
        </div>
      </div>
    </div>
  );
};

export default HappyClient;
