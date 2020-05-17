import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mainimage3 from '../../assets/mainimg3.jpg';
import './GalleryItem.css';

export class GalleryItem extends Component {
    readItem = (e) => {
        console.log(this.props);
    }

    render() {
        return (
            <div className="article-cont" onClick={this.readItem}>
                <div className='item-img-cont'>
                    <img src = {mainimage3} alt={this.props.article.name}/>
                </div>
                <h3 className='article-name'>{this.props.article.name}</h3>
                <p className='article-desc'>{this.props.article.description}</p>
            </div>
        )
    }
}

// PropTypes
GalleryItem.propTypes = {
    articles: PropTypes.object.isRequired
}

export default GalleryItem
