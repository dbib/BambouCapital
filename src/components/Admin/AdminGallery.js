import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../../actions/itemActions';

import './AdminGalleryItem.css';

class AdminGallery extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    }

    render() {
        const { items } = this.props.item;
        return (
            <div>
                {
                    items.map((article) => (
                        <div className="article-cont">
                            <div className='item-img-cont'>
                                <img src = {process.env.PUBLIC_URL + `/ressources/uploads/${article.imageFilename}`} alt={article.name}/>
                            </div>
                            <h3 className='article-name'>{article.itemName}</h3>
                            <p className='article-desc'>{article.description}</p>
                            <Link to={"/article/edit/"+article._id} style={editItemStyle}>Modifier l'article</Link>
                            <button 
                                onClick={this.onDeleteClick.bind(this, article._id)} 
                                style={btnStyle}>
                                    Supprimer l'article
                            </button>
                
                        </div>
                    ))
                }
            </div>
        )
    }
}

// PropTypes
AdminGallery.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
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

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(
    mapStateToProps, 
    { getItems, deleteItem }
)(AdminGallery)


