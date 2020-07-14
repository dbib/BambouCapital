import React, { Component } from "react";
import GalleryItem from "./GalleryItem";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getItems } from "../../actions/itemActions";

import "./Gallery.css";

class Gallery extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { items } = this.props.item;
    return (
      <div className="gallery-container-box">
        <div className="gallery-container">
          {items.map((article) => (
            <GalleryItem
              key={article._id}
              article={article}
              className="single-item"
            />
          ))}
        </div>
      </div>
    );
  }
}

// PropTypes
Gallery.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, { getItems })(Gallery);
