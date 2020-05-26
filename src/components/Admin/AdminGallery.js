import React, { Component } from 'react';
import AdminGalleryItem from './AdminGalleryItem';
import PropTypes from 'prop-types';

export default class AdminGallery extends Component {
    
    render() {
        return this.props.articles.map((article) => (
            <AdminGalleryItem key={article._id} article = {article} deleteItem = {this.props.deleteItem} />
        ));
    }
}


// PropTypes
AdminGallery.propTypes = {
    articles: PropTypes.array.isRequired
}
