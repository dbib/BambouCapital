import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Presentation.css";
import missionimg from "../../assets/mainimg3.jpg";
import teamprimg1 from "../../assets/teamprimg1.jpeg";

export default class Presentation extends Component {
  render() {
    return (
      <div id="home-container">
        <div className="presentaion-cont grid">
          <div className="welcome-text">
            <h1>Soyez unique et different</h1>
            <h3>
              Parce-que nous sommes tous unique, donner à votre maison un coté
              unique, authentique et personnel qui vous ressemble
            </h3>
            <p>
              Nous construisons des objets et des meubles qui donnent à votre
              maison un aspect spécial et agréable
            </p>
            <br />
            <br />
            <Link to="/gallery" className="button-cta">
              Découvrir
            </Link>
          </div>
        </div>
        <div className="mission-cont">
          <div className="mission-img">
            <img src={missionimg} alt="lampshade" />
          </div>
          <div className="mission-text">
            <h2>Notre Mission</h2>
            <p>
              A bambou Capital nous utilisons notre savoir faire et expérience
              dans le travail du bois pour offrir à nos clients des produits
              uniques et authentiques, faites sur mesure qui correspondent à la
              vision et aux désirs de chacun de nos clients.
            </p>
            <br />
            <Link to="/Design" className="button">
              En savoir plus
            </Link>
          </div>
        </div>
        <div className="team-cont">
          <div className="team-img">
            <img src={teamprimg1} alt="team images" />
          </div>
          <div className="team-text">
            <h2>Notre Equipe</h2>
            <p>
              Notre équipe est constituée des personnes qualifiées et
              compétentes qui collaborent avec nos clients tout au long du
              processus de création
            </p>
            <br />
            <Link to="/Design" className="button">
              En savoir plus
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
