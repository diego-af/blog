import React from "react";

import {
  FaBookOpen,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

import "./index.css";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <div className="envelop">
      <header className="header">
        <h3 className="title">
          Blog <span className="nameReformed"> Reformado</span>
        </h3>
        <span>
          <FaBookOpen size={20} color="#53bb77" />
        </span>
      </header>
      <div>
        <div className="icon">
          <a href="https://www.instagram.com/dyeegoalves/" target="blank">
            <FaInstagram color="#fff" size={22} />
          </a>
          <a href="">
            <FaTwitter color="#fff" size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/diego-alves-a903b81a4/"
            target="blank"
          >
            <FaLinkedin color="#fff" size={22} />
          </a>
          <a href="https://github.com/diego-af" target="blank">
            <FaGithub color="#fff" size={22} />
          </a>
        </div>
      </div>
    </div>
  );
}
