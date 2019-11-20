import React from "react";
import SignUpForm from "./SignUpForm";
import LoginForm from "../LoginForm/LoginForm";
import { connect } from "react-redux";
import { signup, login } from "../actions";

class UserFormContainer extends React.Component {
  state = { userName: "", password: "" };

  //   *****LOGIN*****
  onLogin = event => {
    event.preventDefault();
    this.props.login(this.state.userName, this.state.password);
  };

  // *****SIGNUP*****
  onSignUp = event => {
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
    if (authToken) {
      return <div> hello </div>;
    } else if (checkSignUp) {
      return <div>You signed up!</div>;
    } else {
      return (
        <div>
          <SignUpForm
            onSubmit={this.onSignUp}
            onChange={this.onChange}
            values={this.state}
          />
          <LoginForm
            onSubmit={this.onLogin}
            onChange={this.onChange}
            values={this.state}
          />
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return { checkSignUp: state.signup, authToken: state.login };
}

export default connect(mapStateToProps, { signup, login })(UserFormContainer);
