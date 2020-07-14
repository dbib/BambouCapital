import React, { Component } from 'react';
import './AdminRootSettings.css';

export default class AdminRootSettings extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pseudo: '',
            email: '',
            oldpass: '',
            newpass: '',
            newpassconfirm: '',
            checked: false

        }
    }

    onChangePseudo = (e) => {
        this.setState({
            pseudo: e.target.value
        });
    }

    onChangeOldpass = (e) => {
        this.setState({
            oldpass: e.target.value
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

    handleCheck = () => {
        this.setState({
            checked: !this.state.checked
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
    }
    render() {
        let passClass;

        if(!this.state.checked) {
            passClass = "initial passhide"
        } else {
            passClass = "initial"
        }

        return (
            <div className="admin-root-settings-cont">
                <div className="admin-root-text-cont">
                    <p>Modifier les informations personnelles de l'admin, veillez completer seulement les champs que vous voulez modifier</p>
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
                        <div className="checkbox-option">
                            <label>Changer le mot de passe</label>
                            <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked} className="pass-checkbox"/>
                        </div>
                        <div className={passClass}>
                            <label>Ancien Mot de passe:</label>
                            <input type="text" 
                                        name="oldpass"
                                        required 
                                        placeholder =""
                                        value={this.state.oldpass}
                                        onChange={this.onChangeOldpass}
                                        className="admin-reset-infos" 
                            />
                            <label>Nouveau Mot de passe:</label>
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
