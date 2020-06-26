import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import AdminLogout from "../Admin/private/AdminLogout";
import "./Nav.css";

import { connect } from "react-redux";
import PropTypes from "prop-types";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  handleClickBrandName = () => {
    this.setState({ isActive: false });
    document.body.style.overflow = "visible";
  };

  handleClick = () => {
    if (!this.state.isActive) {
      this.setState({ isActive: true });
      document.body.style.overflow = "hidden";
    } else {
      this.setState({ isActive: false });
      document.body.style.overflow = "visible";
    }
  };
  render() {
    let className = "menu-btn";
    let navBarContClass = "nav-bar-container";
    let navElmState = "small-screen nav-closed";
    let navBtnCont = "btn-container";
    if (this.state.isActive) {
      className += " open";
      navBarContClass += " navopen";
      navElmState = "small-screen";
      navBtnCont += " btn-cont-active";
    }

    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Fragment>
        <ul>
          <li>
            <Link to="/" className="link" onClick={this.handleClick}>
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/admingallery"
              className="link"
              onClick={this.handleClick}
            >
              Gerer la galerie
            </Link>
          </li>
          <li>
            <Link to="/article/add" className="link" onClick={this.handleClick}>
              Ajouter un article
            </Link>
          </li>
          <li>
            <Link to="/adminmain" className="link" onClick={this.handleClick}>
              Dashboard
            </Link>
          </li>
          <li onClick={this.handleClick}>
            <AdminLogout />
          </li>
        </ul>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <ul>
          <li>
            <Link to="/" className="link" onClick={this.handleClick}>
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="link" onClick={this.handleClick}>
              Galerie
            </Link>
          </li>
          <li>
            <Link to="/design" className="link" onClick={this.handleClick}>
              Design
            </Link>
          </li>
        </ul>
      </Fragment>
    );

    return (
      <div className={navBarContClass}>
        <div className="nav-container">
          <div className="brand-name-container">
            <h3>
              <Link
                to="/"
                className="link name"
                onClick={this.handleClickBrandName}
              >
                Bambou_Cap
              </Link>
            </h3>
          </div>
          <div className={navBtnCont}>
            <div className={className} onClick={this.handleClick}>
              <div className="menu-btn__burger"></div>
            </div>
          </div>
        </div>
        <nav className={navElmState}>
          {isAuthenticated ? authLinks : guestLinks}
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(Nav);
