import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './GalleryItem.css';

export class GalleryItem extends Component {
    readItem = (e) => {
        console.log(this.props);
    }

    render() {
        return (
            <div className="article-container" onClick={this.readItem}>
                <Link to={"/article/"+this.props.article._id} itemInfos = {this.props.article}>
                    <div className='item-img-cont'>
                        <img src = {process.env.PUBLIC_URL + `/ressources/uploads/${this.props.article.imageFilename}`} alt={this.props.article.name}/>
                    </div>
                    <div className='text-container'>
                        <h3 className='gallery-article-name'>{this.props.article.itemName}</h3>
                        <p className='gallery-article-desc'>{this.props.article.description}</p>
                        <p className="gallery-article-lire-plus">Lire plus</p>
                    </div>
                </Link>   
            </div>
        )
    }
}

// PropTypes
GalleryItem.propTypes = {
    article: PropTypes.object.isRequired
}

export default GalleryItem
