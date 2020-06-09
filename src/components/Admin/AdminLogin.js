import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import loginpage from '../../assets/loginundraw.svg';
import axios from 'axios';
import './AdminLogin.css';

export default class AdminLogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pseudo: '',
            password: ''
        }
    }

    onChangePseudo = (e) => {
        this.setState({
            pseudo: e.target.value
        });
    }

    onChangePassword = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const Admin = {
            pseudo: this.state.pseudo,
            password: this.state.password
        }
        
        //sending data to our backend
        axios.post('http://localhost:5000/yser/auth', Admin)
           .then(res => {
                this.setState({
                    responseData: res.data,
                    responseStatus: res.status,
                })
                if(res.status === 200){
                    this.setState({
                        pseudo: '',
                        newpass: '',
                        date: new Date()
                    });

                    //window.location = '/adminlogin';
                }
            })
            .catch( err => console.log(err));
    }
    
    render() {
        return (
            <div className="admin-login-container">
                <div className="login-text-container">
                    <p>
                        Connectez vous entant qu'admin pour ajouter ou modilfier d'article
                    </p>
                </div>
                <div className="ill-container">
                    <img src={loginpage} alt="admin-illustration"/>
                </div>
                <div className="login-form">
                    <form onSubmit={this.onSubmit} encType="multipart/form-data">
                        <div className="login-form-group">
                            <label>Pseudo:</label>
                            <input type="text" 
                                        name="pseudo"
                                        required 
                                        placeholder ="Pseudo"
                                        value={this.state.pseudo}
                                        onChange={this.onChangePseudo}
                                        className="admin-infos" 
                            />
                        </div>
                        <div className= "login-form-group">
                            <label>Mot de passe:</label>
                            <input type="password" 
                                        name="password"
                                        required 
                                        placeholder =""
                                        value={this.state.password}
                                        onChange={this.onChangePassword}
                                        className="admin-infos" 
                            />
                        </div>
                        <div className="login-form-group login-botton">
                            <input type="submit"
                                    value="Connexion"
                                    name="connect-admin"
                                    className="admin-connect-botton"
                            />
                            <Link to="/adminresetpass" className='login-forget-pass'>
                                Mot de passe oublier
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
