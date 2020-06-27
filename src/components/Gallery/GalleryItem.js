import React, { Component } from "react";
import PropTypes from "prop-types";
import "./GalleryItem.css";

export class GalleryItem extends Component {
  readItem = (e) => {
    console.log(this.props);
  };

  render() {
    let singleItemContClass = "article-container";
    const eltHeight = this.props.article.imageHeightDimension;
    const eltWidth = this.props.article.imageWidthDimension;
    const eltDiff = eltHeight - eltWidth;

    if (eltDiff > 200) {
      singleItemContClass += " big-box";
    }
    return (
      <div className={singleItemContClass} onClick={this.readItem}>
        <div className="item-img-cont">
          <img
            src={
              process.env.PUBLIC_URL +
              `/ressources/uploads/${this.props.article.imageFilename}`
            }
            alt={this.props.article.name}
          />
        </div>
        <div className="text-container">
          <h3 className="gallery-article-name">
            {this.props.article.itemName}
          </h3>
          <p className="gallery-article-desc">
            {this.props.article.description}
          </p>
        </div>
      </div>
    );
  }
}

// PropTypes
GalleryItem.propTypes = {
  article: PropTypes.object.isRequired,
};

export default GalleryItem;
