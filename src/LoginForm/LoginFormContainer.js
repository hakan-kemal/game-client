import React from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { login } from "../actions";
import { Link } from "react-router-dom";

class LoginFormContainer extends React.Component {
  state = { userName: "", password: "" };

  // *****LOGIN*****
  onSubmit = event => {
    event.preventDefault();
    this.props.login(this.state.userName, this.state.password);
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const checkSignUp = this.props.checkSignUp;
    const authToken = this.props.authToken;
    if (authToken || checkSignUp) {
      return (
        <div>
          <h6>Login successful!</h6>
          <p>
            Continue to <Link to={`/room`}>MainLobby</Link>
          </p>
        </div>
      );
    } else {
      return (
        <LoginForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
      );
    }
  }
}

function mapStateToProps(state) {
  return { checkSignUp: state.signup, authToken: state.login };
}

export default connect(mapStateToProps, { login })(LoginFormContainer);
