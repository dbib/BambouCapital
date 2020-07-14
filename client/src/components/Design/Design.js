import React, { Component } from "react";
import moise1 from "../../assets/moise2.jpeg";
import francis1 from "../../assets/francis3.jpeg";
import "./Design.css";

export default class Design extends Component {
  render() {
    return (
      <div className="design-cont">
        <div className="design-text">
          <p>
            Notre équipe est constituée des personnes compétentes et qualifiées
            qui ont le soucis du détail et mettent le client au centre de tout
            le processus de création
            <br />
            Dès la prise de contact, le client peut décider de nous exposer sa
            vision du produit qu'il souhaite avoir au final.
            <br />
            Le client peut également choisir de nous faire confiance et de nous
            laisser nous occuper seul de toute la phase de création et de lui
            livrer au final le produit finis qui garde alors un coté artisanale
            ou l'âme de l'artiste comme dise le connaisseurs.
          </p>
        </div>
        <div className="designers grid">
          <div className="designer1 designer-cont">
            <div className="designer-img-cont">
              <img src={moise1} alt="moise" />
            </div>
            <div className="designer-text-cont">
              <h2>Moise MBUSA</h2>
              <h3>Concepteur</h3>
              <p>
                Moise MBUSA travail le bois depuis son plus jeune age il est le
                fondateur de Bambou Capital Il est le concepteur principale des
                produits, il dessine, conçoit et discute avec les clients pour
                créer des produits personnalisés selon les désirs du client.
              </p>
            </div>
          </div>
          <div className="designer2 designer-cont">
            <div className="designer-img-cont">
              <img src={francis1} alt="Francis" />
            </div>
            <div className="designer-text-cont">
              <h2>Francis</h2>
              <h3>Chef d'atelier</h3>
              <p>
                Il s'occupe du travail des tissus, de la peinture et parvient
                avec brio à leur donner une apparence harmonieuse qui correspond
                au cadre dans lequel le produit sera intégré.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
