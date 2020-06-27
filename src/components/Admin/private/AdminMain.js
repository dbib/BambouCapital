import React, { Component } from "react";
import { Link } from "react-router-dom";
import adminmainillustration from "../../../assets/adminmain.svg";
import "./AdminMain.css";

import { connect } from "react-redux";
import PropTypes from "prop-types";

class AdminMain extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  render() {
    const { user } = this.props.auth;
    return (
      <div className="admin-main">
        <p className="user-connected">{user ? user.pseudo : ""} est connecté</p>
        <div className="admin-main-container">
          <div className="admin-main-text-cont">
            <h2>
              Bienvenu à la page admin, d'ici vous pouvez modifier, supprimer et
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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(AdminMain);
