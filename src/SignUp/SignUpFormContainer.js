import React from "react";
import SignUpForm from "./SignUpForm";
import { connect } from "react-redux";
import { signup } from "../actions";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import LoginFormContainer from "../LoginForm/LoginFormContainer";

class SignUpFormContainer extends React.Component {
  state = { userName: "", password: "" };

  onSubmit = event => {
    event.preventDefault();
    this.props.signup(this.state.userName, this.state.password);
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const checkSignUp = this.props.checkSignUp;
    const authToken = this.props.authToken;
    if (!checkSignUp && !authToken) {
      return (
        <div id="signupCard">
          <h6 id="signupContent">Sign up</h6>
          <p>
            <br></br>
          </p>
          <SignUpForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
          />
        </div>
      );
    } else if (!authToken && checkSignUp) {
      return (
        <div id="signinCard">
          <div>
            <h6 id="signinContent">Signup successful!</h6>
            <p>
              <br></br>
            </p>
            <h6 id="signinContent2">You can now log in:</h6>
          </div>
          <p>
            <br></br>
          </p>
          <p>
            <Route path="/" component={LoginFormContainer} exact />
          </p>
        </div>
      );
    } else {
      return (
        <div id="loggedinCard">
          <h6 id="loggedinContent">Login successful!</h6>
          <p>
            <br></br>
          </p>
          <p>
            Continue to <Link to={`/room`}>Main Lobby</Link>
          </p>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return { checkSignUp: state.signup, authToken: state.login };
}

export default connect(mapStateToProps, { signup })(SignUpFormContainer);
