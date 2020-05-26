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

    onSubmit = (e) => {
        e.preventDefault();

        const Item = {
            itemName: this.state.itemName,
            description: this.state.description,
            itemImage: this.state.itemImage,
            date: this.state.date
        }
        
        //sending data to our backend
        axios.post('http://localhost:5000/articles/add', Item)
           .then(res => console.log(res.data));

        this.setState({
            itemName: '',
            description: '',
            itemImage: '',
            date: new Date()
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
            })
    }

    render() {
        return (
            <div>
                <div>
                    <h3>Creer un nouveau article</h3>
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
                                    value="create Article"
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
