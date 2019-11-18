import React from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { login } from "../actions";
import { signup } from "../actions";

class LoginFormContainer extends React.Component {
  state = { userName: "", password: "" };

  // *****LOGIN*****
  onSubmit = event => {
    event.preventDefault();
    this.props.login(this.state.userName, this.state.password);
  };

  // // *****SIGNUP*****
  // onSubmit = event => {
  //   event.preventDefault();
  //   this.props.signup(this.state.userName, this.state.password);
  // };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const authToken = this.props.authToken;
    if (authToken) {
      return <div> you are logged in! </div>;
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
  return { authToken: state.login };
}

export default connect(mapStateToProps, { login, signup })(LoginFormContainer);
