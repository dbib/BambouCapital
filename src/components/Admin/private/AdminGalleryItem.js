import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./AdminGallery.css";

export class AdminGalleryItem extends Component {
  readItem = (e) => {
    console.log(this.props);
  };

  onDeleteClick = (id) => {
    this.props.deleteItem(id);
  };

  render() {
    let adminArtContClass = "article-cont";
    const eltHeight = this.props.article.imageHeightDimension;
    const eltWidth = this.props.article.imageWidthDimension;
    const eltDiff = eltHeight - eltWidth;

    if (eltDiff > 200) {
      adminArtContClass += " big-box";
    }
    return (
      <div className={adminArtContClass} key={this.props.article._id}>
        <div className="item-img-cont">
          <img
            src={
              process.env.PUBLIC_URL +
              `/ressources/uploads/${this.props.article.imageFilename}`
            }
            alt={this.props.article.name}
          />
        </div>
        <h3 className="article-name">{this.props.article.itemName}</h3>
        <p className="article-desc">{this.props.article.description}</p>
        <Link
          className="edit-item-button"
          to={"/article/edit/" + this.props.article._id}
        >
          Modifier
        </Link>
        <button
          className="delete-button"
          onClick={this.props.onDeleteClick.bind(this, this.props.article._id)}
        >
          Supprimer
        </button>
      </div>
    );
  }
}

// PropTypes
AdminGalleryItem.propTypes = {
  article: PropTypes.object.isRequired,
};

export default AdminGalleryItem;
