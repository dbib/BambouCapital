import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './AdminGalleryItem.css';

export class AdminGalleryItem extends Component {
    readItem = (e) => {
        console.log(this.props);
    }

    componentDidMount(){
        console.log(this.props.article._id)
    }

    render() {
        const id = this.props.article._id;
        const path = this.props.article.imagePath;
        return (
            <div className="article-cont" onClick={this.readItem}>
                <div className='item-img-cont'>
                    <img src = {process.env.PUBLIC_URL + `/ressources/uploads/${this.props.article.imageFilename}`} alt={this.props.article.name}/>
                </div>
                <h3 className='article-name'>{this.props.article.itemName}</h3>
                <p className='article-desc'>{this.props.article.description}</p>
                <Link to={"/article/edit/"+this.props.article._id} style={editItemStyle}>Modifier l'article</Link>
                <button onClick={this.props.deleteItem.bind(this, id, path)} style={btnStyle}>Supprimer l'article</button>
                
            </div>
        )
    }
}

// PropTypes
AdminGalleryItem.propTypes = {
    article: PropTypes.object.isRequired
}

const btnStyle ={
    background: '#df0a00',
    color: '#fff',
    cursor: 'pointer',
    padding: '10px 8px',
    margin: '10px 10px',
    border: 'none',
    fontSize: '20px',
    borderRadius: '3px'
}

const editItemStyle = {
    background: '#a5e1f2',
    color: '#fff',
    cursor: 'pointer',
    padding: '10px 8px',
    margin: '10px 10px',
    border: 'none',
    fontSize: '20px',
    textAlign: 'center',
    borderRadius: '3px'
}

export default AdminGalleryItem
