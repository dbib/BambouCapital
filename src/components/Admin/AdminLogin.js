import React, { Component } from "react";
import { Link } from "react-router-dom";
import loginpage from "../../assets/loginundraw.svg";
import PropTypes from "prop-types";
import { login } from "../../actions/authActions";
import { connect } from "react-redux";
import { clearErrors } from "../../actions/errorActions";
import "./AdminLogin.css";

class AdminLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pseudo: "",
      password: "",
      msg: null,
    };
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      //Check for login error
      if (error.id === "LOGIN_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
  }

  onChangePseudo = (e) => {
    this.setState({
      pseudo: e.target.value,
    });
  };

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { pseudo, password } = this.state;

    const user = { pseudo, password };

    // Attempt to login
    this.props.login(user);
  };

  render() {
    return (
      <div className="admin-login-container">
        <div className="login-text-container">
          <p>
            Connectez vous entant qu'admin pour ajouter ou modilfier d'article
          </p>
        </div>
        <div className="ill-container">
          <img src={loginpage} alt="admin-illustration" />
        </div>
        <div className="login-form">
          <form onSubmit={this.onSubmit} encType="multipart/form-data">
            <div className="login-form-group">
              <label>Pseudo:</label>
              <input
                type="text"
                name="pseudo"
                required
                placeholder="Pseudo"
                value={this.state.pseudo}
                onChange={this.onChangePseudo}
                className="admin-infos"
              />
            </div>
            <div className="login-form-group">
              <label>Mot de passe:</label>
              <input
                type="password"
                name="password"
                required
                placeholder=""
                value={this.state.password}
                onChange={this.onChangePassword}
                className="admin-infos"
              />
            </div>
            <div className="login-form-group login-botton">
              <input
                type="submit"
                value="Connexion"
                name="connect-admin"
                className="admin-connect-botton"
              />
              <Link to="/adminresetpass" className="login-forget-pass">
                Mot de passe oublier
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { login, clearErrors })(AdminLogin);
