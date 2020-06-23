import React, { Component } from "react";
import { Link } from "react-router-dom";
import adminmainillustration from "../../../assets/adminmain.svg";
import "./AdminMain.css";

export default class adminMain extends Component {
  render() {
    return (
      <div className="admin-main-container">
        <div className="admin-main-text-cont">
          <h2>
            Bienvenu aa la page admin d'ici vous pouver modifier, supprimer et
            ajouter des nouvels articles
          </h2>
        </div>
        <div className="admin-main-ill-cont">
          <img src={adminmainillustration} alt="illustration des cartons" />
        </div>
        <div className="admin-main-functions-cont">
          <Link to="/article/add" className="admin-func green">
            Ajouter un nouvel article
          </Link>
          <Link to="/admingallery" className="admin-func violet">
            Gerer les articles
          </Link>
          <Link to="/adminrootsettings" className="admin-func violet">
            Modifier paramettres de l'admin
          </Link>
        </div>
      </div>
    );
  }
}
