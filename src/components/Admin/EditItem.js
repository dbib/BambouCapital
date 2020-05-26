import React, { Component } from 'react';
import axios from 'axios';

import './CreateItem.css';

export default class EditItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            itemName: '',
            description: '',
            itemImage: '',
            date: new Date()
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

    onChangeHandler = e => {
        this.setState({
            itemImage: e.target.files[0],
            loaded: 0
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const Item = {
            itemName: this.state.itemName,
            description: this.state.description,
            date: this.state.date
        }
        
        //sending data to our backend
        axios.post('http://localhost:5000/articles/update/'+this.props.match.params.id, Item)
           .then(res => console.log(res.data));

        //sending image data
        if (this.state.itemImage !== '') {
            const data = new FormData();
            data.append('file', this.state.itemImage);
            axios.post("http://localhost:5000/articles/updateimage/"+this.props.match.params.id, data, {})
            .then(res => {
                console.log(res.statusText);
            });
        }

        this.setState({
            itemName: '',
            description: '',
            itemImage: '',
            date: new Date()
        });
    } 

    render() {
        return (
            <div>
                <div>
                    <h3>Modifier l'article</h3>
                    <form onSubmit={this.onSubmit} encType="multipart/form-data" id='form-id'>
                        <div className="form-group">
                            <label>Nom de l'article:</label>
                            <input type="text" 
                                        name="articleName"
                                        required
                                        value={this.state.itemName}
                                        onChange={this.onChangeItemName} 
                            />
                        </div>
                        <div className= "from-group">
                            <label>Description:</label>
                            <input type="text" 
                                        name="articleDescription"
                                        required
                                        value={this.state.description}
                                        onChange={this.onChangeDescription} 
                            />
                        </div>
                        <div className="form-group">
                            <input type="submit"
                                    value="Modifier l'article"
                                    name="uploaded_file"
                            />
                        </div>
                    </form>    
                </div>
                <div>
                    <div className="form-group file">
                        <label>Upload Your file</label>
                        <input type="file" name="file" onChange = {this.onChangeHandler}/>
                    </div>
                    <button type="button" onClick={this.onClickHandler}>Upload image</button>
                </div>
            </div>
        )
    }
}
