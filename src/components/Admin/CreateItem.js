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
            imageUploader: false,
            responseData: "",
            responseStatus: "",
            popUpstate: false
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
                    responseData: res.data,
                    responseStatus: res.status,
                    popUpstate: true
               })
               if(res.statusText === 'OK'){
                this.setState({
                    imageUploader: true
                   })
               }
               console.log(res.statusCode);
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
        if(this.state.itemImage === ''){
            this.setState({
                responseData: "Vous devez selectionner une image pour envoyer",
                responseStatus: 400,
                popUpstate: true
            })
        }else{
            const data = new FormData();
            data.append('file', this.state.itemImage);
            axios.post("http://localhost:5000/articles/upload", data, {})
                .then(res => {
                    console.log(res.status);
                    this.setState({
                        responseData: res.data,
                        responseStatus: res.status,
                        popUpstate: true
                })
                if(res.statusText === 'OK') {
                    this.setState({
                        imageUploader: false
                    });
                }
                });
        
        }
    }
    
    onPopupClick = () => {
        this.setState({
            popUpstate: false
        })
    }

        //window.location = '/article/add';
    render() {
        let textInfosClasses = "product-infos-container";
        let imageContainer = "image-container hideUploader";
        let barImageBackgroundColorStyle = "rgb(236, 234, 234)";
        let step = 1;
        if(this.state.imageUploader){
            textInfosClasses += " hideUploader";
            imageContainer = "image-container";
            barImageBackgroundColorStyle = "rgb(11, 161, 66)";
            step = 2;
        }

        let responseReceived = '';
        let statusReceived = '';

        if(this.state.responseData.length > 0) {
            responseReceived = this.state.responseData;
        }

        if(this.state.responseStatus !== ''){
            statusReceived = this.state.responseStatus;
        }

        let resHandler ="res-handler-normal res-handler-hide"

        if(this.state.popUpstate) {
            if(statusReceived === 200) {
                resHandler = "res-handler-normal";
            }
    
            if(statusReceived === 400){
                resHandler = "res-handler-error"
            }
        }
        
        return (
            
            <div className="create-item-root">
                <div className = {resHandler}>
                    <p className="first">{responseReceived}</p>
                    <p className="second" onClick={this.onPopupClick}>X</p>
                </div>
                <h2>Ajouter un article</h2>
                <p className="step-container">{`${step} sur 2`}</p>
                <div className="bar-container">
                    <div className="bar-text"></div>
                    <div className="bar-image" style={{backgroundColor: barImageBackgroundColorStyle}}></div>
                </div>
                <div className={textInfosClasses}>
                    <h4>Ajouter les informations de l'article</h4>
                    <form onSubmit={this.onSubmit} encType="multipart/form-data" id='form-id'>
                        <div className="form-group">
                            <label>Nom de l'article:</label>
                            <input type="text" 
                                        name="articleName"
                                        required 
                                        placeholder ="Coxy bambou lampe"
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
                                        placeholder ="made in DRC"
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
                    <h4>Ajouter la photo de l'article</h4>
                    <div className="form-group file">
                        <p>Pour des raisons de performance, il faut ajouter seulement une photo dont la capacite est inferieur a 1MB.</p>
                        <p>Pour envoyer des belles photos avec cette petite utilise <a target="_blank" rel="noopener noreferrer" href="https://tinypng.com/">Tinypng</a> pour convertir vos images! Vous n'allez pas le regretter</p>
                        <label>Ajouter la photo:</label>
                        <input type="file" name="file" onChange = {this.onChangeHandler} className="infos-text imageSelector"/>
                    </div>
                    <button type="button" onClick={this.onClickHandler} className="infos-submit-botton">Ajouter l'image</button>
                </div>
            </div>
        )
    }
}
