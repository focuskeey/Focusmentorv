import React from "react";
import {
  Github,
  Tiktok,
  Stackoverflow,
  Youtube,
  Linkedin,
  Facebook,
  Instagram,
  X,
  Reddit,
  Mail,
} from "./Icons";
import { Link } from "react-router-dom";

const Card = () => {
  const LogoDatas = [
    { svg: Github, url: "" },
    { svg: Stackoverflow, url: "" },
    { svg: Youtube, url: "" },
    { svg: Tiktok, url: "" },
    { svg: Linkedin, url: "" },
    { svg: Facebook, url: "" },
    { svg: Instagram, url: "" },
    { svg: X, url: "" },
    { svg: Reddit, url: "" },
    { svg: Mail, url: "" },
  ];
  return (
    <div className="card-container ">
      <div className="container ">
        <header>
          <div className="logo-name">
            <div className="logo">
              <img src="logo.png" alt="Logo" />
            </div>
            <div className="animated-text">focusmentorv</div>
          </div>
          <nav>
            <ul>
              {LogoDatas.map((data, index) => (
                <li  key={index}>
                  <Link to={data.url}><data.svg/></Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main>
          <section className="welcome-section">
            <h1>Welcome.</h1>
            <p>
              My name is Ian Dunkerley, I'm a front-end developer based in
              Torquay, Devon, UK. I have developed many types of front-ends from
              well know DJ applications to Ecommerce booking platforms.
            </p>
            <p>
              I'm passionate about cutting-edge, pixel-perfect, beautiful
              interfaces and intuitively implemented UX.
            </p>
          </section>
          <section className="projects-section">
            <h2>Projects</h2>
            <ul>
              <li>
                <a href="/">Domposer</a>
              </li>
              <li>
                <a href="/">Bay.js</a>
              </li>
              <li>
                <a href="/">Cookiemunch</a>
              </li>
              <li>
                <a href="/">Screen time converter</a>
              </li>
              <li>
                <a href="/">inline.svg</a>
              </li>
            </ul>
          </section>
        </main>
        <footer>
          <p>&copy; 2024 dunks1980.com</p>
        </footer>
      </div>
    </div>
  );
};

export default Card;
