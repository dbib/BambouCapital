import React, { Component } from 'react';
import axios from 'axios';

import './CreateItem.css';

export default class CreateItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            itemName: '',
            description: '',
            //itemImage: React.createRef(),
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
            //itemImage: this.state.itemImage.current.files[0],
            date: this.state.date
        }
        
        //logging our datas
        console.log(Item);

        //sending data to our backend
        axios.post('http://localhost:5000/articles/add', Item)
           .then(res => console.log(res.data));

        this.setState({
            itemName: '',
            description: '',
            //itemImage: React.createRef(),
            date: new Date()
        });
    }

    render() {
        return (
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
        )
    }
}
