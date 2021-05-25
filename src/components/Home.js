import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
// import { LangContext } from "../config/lang-context";
import "./Home.css";

import carousel2 from "../assets/img/carousel/ext1.jpg";
import carousel4 from "../assets/img/carousel/ext2.jpg";
import carousel3 from "../assets/img/carousel/int1.jpg";
import carousel1 from "../assets/img/carousel/int2.jpg";
import ellipse_top from "../assets/img/carousel/ellipse_top.png";
import ellipse_bot from "../assets/img/carousel/ellipse_bot.png";
import ellipse_top_white from "../assets/img/carousel/ellipse_top_white.png";

const Home = (props) => {
  return (
    <section className="home-wrapper" id="home">
      <img
        src={props.theme ? ellipse_top_white : ellipse_top}
        id="ellipse-top"
        alt="ellipse-top"
      />
      <h1 id="title-home">Sant Quirze de Pedret</h1>
      <Carousel
        fade
        controls={false}
        indicators={false}
        interval={5000}
        pause={false}
        className={"carousel-wrapper"}
      >
        <Carousel.Item>
          <img className="d-block w-100" src={carousel1} alt="carousel1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel2} alt="carousel2" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel3} alt="carousel3" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel4} alt="carousel4" />
        </Carousel.Item>
      </Carousel>
      <img
        src={props.theme ? ellipse_top_white : ellipse_top}
        id="ellipse-bot"
        alt="ellipse-bot"
      />
    </section>
  );
};

export default Home;
