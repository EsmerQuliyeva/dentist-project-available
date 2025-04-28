import React from "react";
import sophie from "../../assets/sophie-CdUBmCFc.jpg";
import morgan from "../../assets/morgan-BpynVxgl.jpg";
import lila from "../../assets/lila-DuuYARB5.jpg";
import "./Clients.css";
const clients = [
  { name: "DSophie Morre", image: sophie },
  { name: "Morgan Wood", image: morgan },
  { name: "Lila Wood", image: lila },
];
const Clients = () => {
  return (
    <div className="clients-container">
      <h1>
        See what our over 1,000 happy<br></br> customers have to say
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque totam
        rerum, a eaque obcaecati iure excepturi amet est<br></br>Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Beatae, voluptatibus et?
      </p>
      <div className="clients">
        {clients.map((client, index) => (
          <div key={index} className="client">
            <div className="client-image">
              <img src={client.image} className="card-img" alt={client.name} />
            </div>
            <div className="client-info">
              <h2 className="client-name">{client.name}</h2>
              <p className="client-description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
                expedita aliquam, aut quia eum nihil.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
