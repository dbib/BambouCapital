import React, { Component } from 'react';
import GalleryItem from './GalleryItem';
import PropTypes from 'prop-types';

export default class Gallery extends Component {
    render() {
        return (
            <div className = "gallery-container" style={galContStyle}>
                {
                    this.props.articles.map((article) => (
                        <GalleryItem key={article._id} article = {article} />
                    ))
                }
            </div>
        )
    }
}

const galContStyle = {
    backgroundColor: '#f9f8fd',
    border: '1px solid #f9f8fd',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: '30px',
    padding: '20px 30px'
}


// PropTypes
Gallery.propTypes = {
    articles: PropTypes.array.isRequired
}
