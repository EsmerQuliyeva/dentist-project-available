import React from "react";
import Interrior from "../Components/Interrior/Interrior";
import CardSlider from "../Components/CardSlider/CardSlider";
import HappyTeam from "../Components/HappyTeam/HappyTeam";
import Clients from "../Components/Clients/Clients";
import HappyClient from "../Components/HappyClient/HappyClient";
import Contact from "../Components/Contact/Contact";
import CardsNew from "../Components/CardsNew/CardsNew";
const Home = () => {
  return (
    <div>
      <div className="container">
        <Interrior />
        <CardsNew />
        <HappyTeam />
        <Clients />
        <HappyClient />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
