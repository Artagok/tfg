import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Carousel, Jumbotron, Container } from "react-bootstrap";
import BackgroundSlider from "react-background-slider";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import { LangContext } from "../lang-context";
import home_bg1 from "../assets/img/home_bg/int1.jpg";
import home_bg2 from "../assets/img/home_bg/int2.jpg";
import home_bg3 from "../assets/img/home_bg/ext1.jpg";
import home_bg4 from "../assets/img/home_bg/ext2.jpg";
import ca from "../assets/img/lang/ca.png";
import es from "../assets/img/lang/es.png";
import en from "../assets/img/lang/en.png";

// const $ = window.$;

// Maybe shuffle it every time Home is loaded
const HOME_BG = [home_bg1, home_bg2, home_bg3, home_bg4];

const Home = (props) => {
  const [pointCloudID, setPointCloudID] = useState("0");
  const [clippingBox, setClippingBox] = useState({});

  // useEffect(() => {
  //   document.getElementById(
  //     "home"
  //   ).style.backgroundImage = `${linearGradientBG}, url("${
  //     HOME_BG[Math.floor(Math.random() * HOME_BG.length)]
  //   }")`;
  //   const interval = setInterval(() => {
  //     document.getElementById(
  //       "home"
  //     ).style.backgroundImage = `${linearGradientBG}, url("${
  //       HOME_BG[Math.floor(Math.random() * HOME_BG.length)]
  //     }")`;
  //   }, 10e3);
  //   return () => clearInterval(interval);
  // }, []);

  // const handleInputClipBox = (e, type, coord) => {
  //   setClippingBox((prev) => ({
  //     ...prev,
  //     type: { ...prev[type], `${coord}`: e.target.value },
  //   }));
  // };

  useEffect(() => {
    AOS.init({
      duration: 1.25e3,
    });
  }, []);

  return (
    <LangContext.Consumer>
      {([lang, changeLang, l]) => (
        <div className="home" id="home">
          <BackgroundSlider images={HOME_BG} duration={10} transition={3} />
          <div className="language-button-wrapper" data-aos={"fade-down"}>
            <button
              className="language-button"
              onClick={() => {
                changeLang("ca");
              }}
              style={{ opacity: l === "ca" ? 1 : 0.4 }}
            >
              <img src={ca} alt="" />
            </button>
            <button
              className="language-button"
              onClick={() => {
                changeLang("es");
              }}
              style={{ opacity: l === "es" ? 1 : 0.4 }}
            >
              <img src={es} alt="" />
            </button>
            <button
              className="language-button"
              onClick={() => {
                changeLang("en");
              }}
              style={{ opacity: l === "en" ? 1 : 0.4 }}
            >
              <img src={en} alt="" />
            </button>
          </div>
          <Jumbotron className="jumbotron-wrapper" data-aos={"fade-right"}>
            <Container>
              <h1>
                <u>Sant Quirze de Pedret</u>
              </h1>
              <p>{lang.home.jumbotron.p1}</p>
              <p>{lang.home.jumbotron.p2}</p>
            </Container>
          </Jumbotron>
          <Carousel
            controls={false}
            indicators={false}
            interval={5000}
            pause={false}
            className={"carousel-wrapper"}
            data-aos={"fade-left"}
          >
            <Carousel.Item>
              <img className="d-block w-100" src={home_bg1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={home_bg2} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={home_bg3} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={home_bg4} alt="First slide" />
            </Carousel.Item>
          </Carousel>
          <select onChange={(e) => setPointCloudID(e.target.value)}>
            <option value="0">PointCloud 0</option>
            <option value="1">PointCloud 1</option>
            <option value="2">PointCloud 2</option>
            <option value="3">PointCloud 3</option>
          </select>
          <br></br>
          {/* <input
            type="number"
            onChange={(e) => handleInputClipBox(e, "pos", "x")}
          ></input>
          <input
            type="number"
            onChange={(e) => handleInputClipBox(e, "pos", "y")}
          ></input>
          <input
            type="number"
            onChange={(e) => handleInputClipBox(e, "pos", "z")}
          ></input>
          <br></br>
          <input
            type="number"
            onChange={(e) => handleInputClipBox(e, "sca", "x")}
          ></input>
          <input
            type="number"
            onChange={(e) => handleInputClipBox(e, "sca", "y")}
          ></input>
          <input
            type="number"
            onChange={(e) => handleInputClipBox(e, "sca", "z")}
          ></input>
          <br></br> */}
          <Link
            to="/pointcloudnavigator"
            onClick={() => {
              props.callback(pointCloudID);
            }}
          >
            Click!
          </Link>
        </div>
      )}
    </LangContext.Consumer>
  );
};

export default Home;
