import React, { Component } from 'react';
import './AdminRegister.css';
import axios from 'axios';

export default class AdminRegister extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pseudo: '',
            email: '',
            newpass: '',
            newpassconfirm: '',
            date: new Date(),
            responseData: "",
            responseStatus: "",
        }
    }

    onChangePseudo = (e) => {
        this.setState({
            pseudo: e.target.value
        });
    }

    onChangeNewpass = (e) => {
        this.setState({
            newpass: e.target.value
        });
    }

    onChangeNewpassconfirm = (e) => {
        this.setState({
            newpassconfirm: e.target.value
        });
    }

    onChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        
        const User = {
            pseudo: this.state.pseudo,
            email: this.state.email,
            password: this.state.newpass,
            passwordconfirm: this.state.newpassconfirm,
            date: this.state.date
        }
        
        //sending data to our backend
        axios.post('http://localhost:5000/admin/register', User)
           .then(res => {
                this.setState({
                    responseData: res.data,
                    responseStatus: res.status,
                })
                if(res.status === 200){
                    this.setState({
                        pseudo: '',
                        email: '',
                        newpass: '',
                        newpassconfirm: '',
                        date: new Date()
                    });

                    window.location = '/adminlogin';
                }
            })
            .catch( err => console.log(err));



    }

    render() {
        return (
            <div className="admin-root-settings-cont">
                <div className="admin-root-text-cont">
                    <p>veillez completer seulement les champs que vous voulez modifier</p>
                </div>
                <div className="admin-root-form">
                    <form onSubmit={this.onSubmit} encType="multipart/form-data">
                        <div className="admin-root-form-group">
                            <label>Pseudo:</label>
                            <input type="text" 
                                        name="pseudo"
                                        required 
                                        placeholder ="moise002"
                                        value={this.state.pseudo}
                                        onChange={this.onChangePseudo}
                                        className="admin-reset-infos" 
                            />
                            <label>Email:</label>
                            <input type="text" 
                                        name="email"
                                        required 
                                        placeholder ="xx@gmail.com"
                                        value={this.state.email}
                                        onChange={this.onChangeEmail}
                                        className="admin-reset-infos" 
                            />
                        </div>
                        <div className="initial">
                            <label>Mot de passe:</label>
                            <input type="text" 
                                        name="newpass"
                                        required 
                                        placeholder =""
                                        value={this.state.newpass}
                                        onChange={this.onChangeNewpass}
                                        className="admin-reset-infos" 
                            />
                            <label>Confirmer le mot de passe:</label>
                            <input type="text" 
                                        name="newpassconfirm"
                                        required 
                                        placeholder =""
                                        value={this.state.newpassconfirm}
                                        onChange={this.onChangeNewpassconfirm}
                                        className="admin-reset-infos" 
                            />
                        </div>
                        <div className="admin-root-group-botton">
                            <input type="submit"
                                    value="Enregistrer"
                                    name="reset-pass"
                                    className="admin-root-botton"
                            />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
