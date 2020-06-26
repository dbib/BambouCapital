import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../../../actions/itemActions";

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
            <div className="article-cont">
              <div className="item-img-cont">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    `/ressources/uploads/${article.imageFilename}`
                  }
                  alt={article.name}
                />
              </div>
              <h3 className="article-name">{article.itemName}</h3>
              <p className="article-desc">{article.description}</p>
              <Link
                className="edit-item-button"
                to={"/article/edit/" + article._id}
              >
                Modifier
              </Link>
              <button
                className="delete-button"
                onClick={this.onDeleteClick.bind(this, article._id)}
              >
                Supprimer
              </button>
            </div>
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
