import React, { Component } from 'react';
import './Presentation.css';
import mainimage3 from '../../assets/mainimg3.jpg';
import missionimg from '../../assets/missionimg.jpeg';
import teamprimg1 from '../../assets/teamprimg1.jpeg';

export default class Presentation extends Component {
    render() {
        return (
            <div id="home-container">      
                <div className="presentaion-cont grid">
                    <div className="welcome-text">
                        <p>NOUS CONSTRUISONS DES OBJECTS ET DES MEUBLES QUI DONNENT A VOTRE MAISON UN COTE UNIQUE, CALME ET AUTHENTIQUE</p>
                        <br/>
                        <a href="/" className="button">DECOUVRIRE</a>
                    </div>
                    <div className="welcome-img">
                        <img src={mainimage3} alt="Chaise en bambou"/>
                    </div> 
                </div>
                <div className="mission-cont grid">
                    <div className="mission-text">
                        <h2>Notre Mission</h2>
                        <p>A bambou Capital nous utilisons notre savoir faire et experience dans le travail du bois pour offrir
                            a nos clients des produits uniques et authentiques, faites sur mesure qui correspondent aa la vision
                            et aux desirs de chacun de nos clients.
                        </p>
                        <br/>
                        <a href="/Design" className="button"> En savoir plus</a>
                    </div>
                    <div className="mission-img">
                        <img src={missionimg} alt='lampshade' />
                    </div>
                </div>
                <div className="team-cont grid">
                    <div className="team-txt">
                        <h2>Notre Equipe</h2>
                        <p>Notre equipe est constituee des personnes qualifies et competantes qui 
                            collaborent avec nos clients tout au long du processus de creation
                        </p>
                        <br/>
                        <a href="/Design" className="button"> Voir notre equipe</a>
                    </div>
                    <div className="team-img">
                        <img src={teamprimg1} alt="team images" />
                    </div>
                </div>
            </div>

        )
    }
}
