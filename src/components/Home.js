import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Home.css";
import home_bg1 from "../assets/img/home_bg/int1.jpg";
import home_bg2 from "../assets/img/home_bg/int2.jpg";
import home_bg3 from "../assets/img/home_bg/ext1.jpg";
import home_bg4 from "../assets/img/home_bg/ext2.jpg";

const $ = window.$;

// Maybe shuffle it every time Home is loaded
const HOME_BG = [home_bg1, home_bg2, home_bg3, home_bg4];
const linearGradientBG = `linear-gradient(
  90deg,
  rgba(0, 0, 0, 0.5) 0%,
  rgba(0, 0, 0, 0.7) 10%,
  rgba(0, 0, 0, 0.8) 20%,
  rgba(0, 0, 0, 0.9) 30%,
  rgba(0, 0, 0, 0.95) 40%,
  rgba(0, 0, 0, 0.98) 50%,
  rgba(0, 0, 0, 0.95) 60%,
  rgba(0, 0, 0, 0.9) 70%,
  rgba(0, 0, 0, 0.8) 80%,
  rgba(0, 0, 0, 0.7) 90%,
  rgba(0, 0, 0, 0.5) 100%
)`;

const Home = (props) => {
  const [pointCloudID, setPointCloudID] = useState("0");

  useEffect(() => {
    document.getElementById(
      "home"
    ).style.backgroundImage = `${linearGradientBG}, url("${
      HOME_BG[Math.floor(Math.random() * HOME_BG.length)]
    }")`;
    const interval = setInterval(() => {
      document.getElementById(
        "home"
      ).style.backgroundImage = `${linearGradientBG}, url("${
        HOME_BG[Math.floor(Math.random() * HOME_BG.length)]
      }")`;
    }, 10e3);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home" id="home">
      <select onChange={(e) => setPointCloudID(e.target.value)}>
        <option value="0">PointCloud 0</option>
        <option value="1">PointCloud 1</option>
        <option value="2">PointCloud 2</option>
        <option value="3">PointCloud 3</option>
      </select>
      <br></br>
      <Link
        to="/pointcloudnavigator"
        onClick={() => {
          props.callback(pointCloudID);
        }}
      >
        Click!
      </Link>
    </div>
  );
};

export default Home;
