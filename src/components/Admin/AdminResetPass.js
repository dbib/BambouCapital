import React, { Component } from 'react';
import './AdminResetPass.css';

export default class AdminResetPass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            adminEmail: '',
        }
    }

    onChangePseudo = (e) => {
        this.setState({
            adminEmail: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div className="admin-reset-pass-cont">
                <div className="admin-reset-text-cont">
                    <p>Vous avez oublier votre mot de passe? Vous pouver le regenerer ici</p>
                    <p>Un nouveau mot de passe vous sera envoyer! Vous pourriez ensuite la change et choisir un mot de 
                        passe de votre choix une fois connecteee
                    </p>
                </div>
                <div className="admin-reset-form-group">
                    <form onSubmit={this.onSubmit} encType="multipart/form-data">
                        <div className="reset-form-group">
                            <label>Email:</label>
                            <input type="text" 
                                        name="email"
                                        required 
                                        placeholder ="xx@gmail.com"
                                        value={this.state.pseudo}
                                        onChange={this.onChangePseudo}
                                        className="admin-reset-infos" 
                            />
                        </div>
                        <div className="reset-group-botton">
                            <input type="submit"
                                    value="Reinitialiser"
                                    name="reset-pass"
                                    className="admin-reset-botton"
                            />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
