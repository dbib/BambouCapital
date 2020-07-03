import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../../../actions/itemActions";
import AdminGalleryItem from "./AdminGalleryItem";

import "./AdminGallery.css";

class AdminGallery extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = (id) => {
    this.props.deleteItem(id);
  };

  render() {
    const { items } = this.props.item;
    return (
      <div className="admin-gal-root">
        <div className="admin-gal-container">
          {items.map((article) => (
            <AdminGalleryItem
              key={article._id}
              article={article}
              className="single-item"
              onDeleteClick={this.onDeleteClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

// PropTypes
AdminGallery.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, { getItems, deleteItem })(AdminGallery);
