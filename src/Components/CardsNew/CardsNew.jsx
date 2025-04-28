import React from "react";
import { useState, useRef, useEffect } from "react";
import Card from "../Card/Card";
import firstphoto from "../../assets/hygiene-dentist.svg";
import secondPhoto from "../../assets/ortho-dentistt.svg";
import "./CardsNew.css";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CardsNew = () => {
  const cards = [
    { name: "Cosmetic", image: firstphoto },
    { name: "Oral Hygiene", image: secondPhoto },
    { name: "Cosmetic", image: secondPhoto },
    { name: "Surgery", image: firstphoto },
    { name: "Cosmetic", image: secondPhoto },
    { name: "Hygiene", image: secondPhoto },
    { name: "Surgery", image: firstphoto },
    { name: "Hygiene", image: secondPhoto },
    { name: "Cosmetic", image: secondPhoto },
    { name: "Surgery", image: firstphoto },
    { name: "Cosmetic", image: secondPhoto },
    { name: "Hygiene", image: secondPhoto },
    { name: "Surgery", image: firstphoto },
    { name: "Hygiene", image: secondPhoto },
  ];

  function NextBtn({ onClick }) {
    return (
      <button className="next-btn-link" onClick={onClick}>
        <IoIosArrowForward />
      </button>
    );
  }

  function PrevBtn({ onClick }) {
    return (
      <button className="prev-btn-link" onClick={onClick}>
        <IoIosArrowBack />
      </button>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 1430,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1368,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1175,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1139,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 810,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="cards-general-part">
      <button className="about-btn" id="card-slider-about-btn">
        Our Services
      </button>
      <div className="card-slider-present">
        <h2>
          Our team of dentists can help with <br></br>a variety of dental
          services
        </h2>
        <button className="book-btn-cards-new">Qəbul üçün yazılın</button>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div className="card-slider" key={index}>
              <Card card={card} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CardsNew;
