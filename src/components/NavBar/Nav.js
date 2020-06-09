import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        };
    }

    handleClickBrandName = () => {
        this.setState({isActive: false});
        document.body.style.overflow = "visible";
    }

    handleClick = () => {
        if (!this.state.isActive) {
            this.setState({isActive: true});
            document.body.style.overflow = "hidden";
        } else {
            this.setState({isActive: false});
            document.body.style.overflow = "visible";
        }
    }
    render() {
        let className = "menu-btn";
        let navBarContClass = "nav-bar-container";
        let navElmState = "nav-closed"
        let navBtnCont = "btn-container"
        if (this.state.isActive) {
            className += " open";
            navBarContClass += " navopen";
            navElmState = "";
            navBtnCont += " btn-cont-active"
        }
        return (
            < div className = {navBarContClass}>
                <div className = "nav-container">
                    <div className="brand-name-container">
                        <h3>
                            <Link to="/" className="link name" onClick={this.handleClickBrandName}>Bambou_Cap</Link>
                        </h3>
                    </div>
                    <div className={navBtnCont}>
                        <div className = {className} onClick={this.handleClick}>
                            <div className = "menu-btn__burger"></div>
                        </div>
                    </div>
                </div>         
                <nav className={navElmState}>
                    <ul>
                        <li>
                            <Link to="/" className="link" onClick={this.handleClick}>Accueil</Link>
                        </li>
                        <li>
                            <Link to="/gallery" className="link" onClick={this.handleClick}>Galleries</Link>
                        </li>
                        <li>
                            <Link to="/design" className="link" onClick={this.handleClick}>Design</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
