import React, { Component, Fragment } from "react";
import Gallery from "./Gallery";
import AdminGallery from "../Admin/private/AdminGallery";

import { connect } from "react-redux";
import PropTypes from "prop-types";

class GalleryHandler extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  render() {
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <Fragment>
        <AdminGallery />
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <Gallery />
      </Fragment>
    );

    return <div>{isAuthenticated ? authLinks : guestLinks}</div>;
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(GalleryHandler);
