import React, { Component } from 'react';
import './Presentation.css';
import missionimg from '../../assets/mainimg3.jpg';
//import missionimg from '../../assets/missionimg.jpeg';
import teamprimg1 from '../../assets/teamprimg1.jpeg';
//import Nav from '../NavBar/Nav';


export default class Presentation extends Component {
    render() {
        return (
            <div id="home-container">      
                <div className="presentaion-cont grid">
                    <div className="welcome-text">
                        <h1>Soyez unique et different</h1>
                        <h3>Parceque nous sommes tous unique, donner a votre maison un cote differant.</h3>
                        <p>Nous construisons des objets et des meubles qui donnent aa votre maison un cote unique, calme et authentique</p>
                        <br/>
                        <br />
                        <a href="/gallery" className="button-cta">Decouvrir</a>
                    </div> 
                </div>
                <div className="mission-cont grid">
                    <div className="mission-img">
                        <img src={missionimg} alt='lampshade' />
                    </div>
                    <div className="mission-text">
                        <h2>Notre Mission</h2>
                        <p>A bambou Capital nous utilisons notre savoir faire et experience dans le travail du bois pour offrir
                            a nos clients des produits uniques et authentiques, faites sur mesure qui correspondent aa la vision
                            et aux desirs de chacun de nos clients.
                        </p>
                        <br/>
                        <a href="/Design" className="button"> En savoir plus</a>
                    </div>
                </div>
                <div className="team-cont grid">
                    <div className="team-img">
                        <img src={teamprimg1} alt="team images" />
                    </div>
                    <div className="team-txt">
                        <h2>Notre Equipe</h2>
                        <p>Notre equipe est constituee des personnes qualifies et competantes qui 
                            collaborent avec nos clients tout au long du processus de creation
                        </p>
                        <br/>
                        <a href="/Design" className="button"> Voir notre equipe</a>
                    </div>
                </div>
            </div>

        )
    }
}
