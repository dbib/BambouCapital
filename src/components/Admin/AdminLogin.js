import React, { Component } from 'react';
import loginpage from '../../assets/moise1.jpeg';
import './AdminLogin.css';

export default class AdminLogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pseudo: 'Moise2020',
            password: 'qwerty'
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
    }
    
    render() {
        return (
            <div>
                <div className="ill-container">
                    <img src={loginpage} alt="admin-illustration"/>
                </div>
                <div className="login-text-container">
                    <p>
                        Connectez vous entant qu'admin pour ajouter ou modilfier d'article
                    </p>
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
                        <div className="login-form-group">
                            <input type="submit"
                                    value="Connexion"
                                    name="connect-admin"
                                    className="admin-connect-botton"
                            />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
