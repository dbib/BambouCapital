import React, { Component } from 'react';
import GalleryItem from './GalleryItem';
import PropTypes from 'prop-types';

export default class Gallery extends Component {
    render() {
        return this.props.articles.map((article) => (
            <GalleryItem key={article._id} article = {article} />
        ));
    }
}


// PropTypes
Gallery.propTypes = {
    articles: PropTypes.array.isRequired
}
