import React, { Component } from 'react';
import axios from 'axios';

import './CreateItem.css';

export default class CreateItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            itemName: '',
            description: '',
            itemImage: '',
            date: new Date(),
            imageUploader: false
        }

        //this.fileInput = React.createRef(); 
    }

    onChangeItemName = (e) => {
        this.setState({
            itemName: e.target.value
        });
    }

    onChangeDescription = (e) => {
        this.setState({
            description: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const Item = {
            itemName: this.state.itemName,
            description: this.state.description,
            //itemImage: this.state.itemImage,
            date: this.state.date
        }
        
        //sending data to our backend
        axios.post('http://localhost:5000/articles/add', Item)
           .then(res => {
               console.log(res.data);
               this.setState({
                imageUploader: true
               })
            });

        this.setState({
            itemName: '',
            description: '',
            //itemImage: '',
            date: new Date(),
            //imageUploader: true
        });

    }

    onChangeHandler = e => {
        this.setState({
            itemImage: e.target.files[0],
            loaded: 0
        })
    }

    onClickHandler = () => {
        const data = new FormData();
        data.append('file', this.state.itemImage);
        axios.post("http://localhost:5000/articles/upload", data, {})
            .then(res => {
                console.log(res.statusText);
            });
        
        this.setState({
            imageUploader: false
        })

        window.location = '/article/add';
    }

    render() {
        let textInfosClasses = "product-infos-container";
        let imageContainer = "image-container hideImageUploader"
        if(this.state.imageUploader){
            textInfosClasses += " hideImageUploader";
            imageContainer = "image-container";
        }
        return (
            <div className="create-item-root">
                <div className={textInfosClasses}>
                    <h2>Ajouter un article</h2>
                    <form onSubmit={this.onSubmit} encType="multipart/form-data" id='form-id'>
                        <div className="form-group">
                            <label>Nom de l'article:</label>
                            <input type="text" 
                                        name="articleName"
                                        required
                                        value={this.state.itemName}
                                        onChange={this.onChangeItemName}
                                        className="infos-text" 
                            />
                        </div>
                        <div className= "form-group">
                            <label>Description:</label>
                            <input type="text" 
                                        name="articleDescription"
                                        required
                                        value={this.state.description}
                                        onChange={this.onChangeDescription}
                                        className="infos-text" 
                            />
                        </div>
                        <div className="form-group">
                            <input type="submit"
                                    value="Ajouter l'article"
                                    name="uploaded_file"
                                    className="infos-submit-botton"
                            />
                        </div>
                    </form>    
                </div>
                <div className={imageContainer}>
                    <div className="form-group file">
                        <label>Ajouter la photo de l'article:</label>
                        <input type="file" name="file" onChange = {this.onChangeHandler} className="infos-text"/>
                    </div>
                    <button type="button" onClick={this.onClickHandler} className="infos-submit-botton">Ajouter l'image</button>
                </div>
            </div>
        )
    }
}
