import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/omurbek.jpg";
import { FaYoutube, FaGithub, FaCode } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="" className="profile-image" />
      <h1 className="profile-text">Hi I am Omurbek Mamytbekov</h1>
      <h2 className="profile-text">The creator of this awesome pokedex</h2>
      <h4 className="profile-text">
        This project is created for for test task (Eclipse Digital)
      </h4>
      <div className="profile-links">
        <a href="https://github.com/Omurbek1">
          <FaGithub />
        </a>
        <a href="https://leetcode.com/Omurbek1/">
          <FaYoutube />
        </a>
        <a href="https://www.linkedin.com/in/omurbek-mamytbekov-b170421a8/">
          <FaCode />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
