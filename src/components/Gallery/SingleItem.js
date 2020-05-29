import React, { Component } from 'react';
import axios from 'axios';

import './SingleItem.css';

export default class SingleItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            itemName: '',
            description: '',
            itemImage: '',
            date: new Date()
        }
    }

    componentDidMount() {
       axios.get('http://localhost:5000/articles/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    itemName: res.data.itemName,
                    description: res.data.description,
                    itemImage: res.data.imagePath,
                    date: new Date(res.data.date)
                })
            })
            .catch((error) => {
                console.log(error);
            })
            
    }

    render() {
        return (
            <div className="single-item-root">
                <div className="single-image-container">
                    <img src =  {process.env.PUBLIC_URL + `/ressources/uploads/${this.props.article.imageFilename}`} alt={this.props.article.name}/> 
                </div>
                <div className="single-text-container">
                    <h1>{this.state.itemName}</h1>
                    <p>{this.state.description}</p>
                </div>
                <div className="single-contact-container">
                    <p>This component will have our contact component</p>
                </div>
            </div>
        )
    }
}
