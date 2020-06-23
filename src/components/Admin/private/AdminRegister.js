import React, { Component } from "react";
import "./AdminRegister.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { register } from "../../../actions/authActions";
import { clearErrors } from "../../../actions/errorActions";

class AdminRegister extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pseudo: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      date: new Date(),
      msg: null,
    };
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  onChangePseudo = (e) => {
    this.setState({
      pseudo: e.target.value,
    });
  };

  onChangeNewpass = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  onChangeNewpassconfirm = (e) => {
    this.setState({
      passwordConfirmation: e.target.value,
    });
  };

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  onClearError = () => {
    // Clear errors
    this.props.clearErrors();
  };

  // Submit the formular
  onSubmit = (e) => {
    e.preventDefault();

    const { pseudo, email, password, passwordConfirmation } = this.state;

    //Create user object
    const newUser = {
      pseudo,
      email,
      password,
      passwordConfirmation,
    };

    //Attempt to register
    this.props.register(newUser);
  };

  // Handling Errors
  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      //Check for register error
      if (error.id === "REGISTER_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }

    if (isAuthenticated) {
      //this.setState({ msg: "new user added " });
    }
  }

  render() {
    return (
      <div className="admin-root-settings-cont">
        {this.state.msg ? (
          <div className="error-message">
            <p className="error-message-text-cont">{this.state.msg}</p>
            <p className="close-error-pop-up" onClick={this.onClearError}>
              X
            </p>
          </div>
        ) : null}
        <div className="admin-root-text-cont">
          <p>veillez completer seulement les champs que vous voulez modifier</p>
        </div>
        <div className="admin-root-form">
          <form onSubmit={this.onSubmit} encType="multipart/form-data">
            <div className="admin-root-form-group">
              <label>Pseudo:</label>
              <input
                type="text"
                name="pseudo"
                placeholder="moise002"
                value={this.state.pseudo}
                onChange={this.onChangePseudo}
                className="admin-reset-infos"
              />
              <label>Email:</label>
              <input
                type="email"
                name="email"
                placeholder="jeanLuc01@gmail.com"
                value={this.state.email}
                onChange={this.onChangeEmail}
                className="admin-reset-infos"
              />
            </div>
            <div className="initial">
              <label>Mot de passe:</label>
              <input
                type="password"
                name="newpass"
                placeholder=""
                value={this.state.newpass}
                onChange={this.onChangeNewpass}
                className="admin-reset-infos"
              />
              <label>Confirmer le mot de passe:</label>
              <input
                type="password"
                name="newpassconfirm"
                placeholder=""
                value={this.state.newpassconfirm}
                onChange={this.onChangeNewpassconfirm}
                className="admin-reset-infos"
              />
            </div>
            <div className="admin-root-group-botton">
              <input
                type="submit"
                value="Enregistrer"
                name="reset-pass"
                className="admin-root-botton"
              />
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
  register: PropTypes.func.isRequired,
});

export default connect(mapStateToProps, { register, clearErrors })(
  AdminRegister
);
