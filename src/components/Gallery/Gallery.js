import React, { Component } from 'react';
import GalleryItem from './GalleryItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getItems } from '../../actions/itemActions';

class Gallery extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    render() {
        const { items } = this.props.item;
        return (
            <div className = "gallery-container" style={galContStyle}>
                {
                    items.map((article) => (
                        <GalleryItem key={article.id} article = {article} />
                    ))
                }
            </div>
        )
    }
}

const galContStyle = {
    backgroundColor: 'rgb(232, 255, 240);',
    border: '1px solid #f9f8fd',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: '30px',
    padding: '20px 30px'
}



// PropTypes
Gallery.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(mapStateToProps, { getItems })(Gallery)