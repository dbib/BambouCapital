import React, { Component, Fragment } from "react";
import { logout } from "../../../actions/authActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./AdminLogout.css";

class AdminLogout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
  };

  render() {
    return (
      <Fragment>
        <Link to="/" onClick={this.props.logout} path="#" className="link">
          DECONNEXION
        </Link>
      </Fragment>
    );
  }
}

export default connect(null, { logout })(AdminLogout);
