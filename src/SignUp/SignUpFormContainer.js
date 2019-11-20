import React from "react";
import SignUpForm from "./SignUpForm";
import { connect } from "react-redux";
import { signup } from "../actions";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import LoginFormContainer from "../LoginForm/LoginFormContainer";

class SignUpFormContainer extends React.Component {
  state = { userName: "", password: "" };

  // *****SIGNUP*****
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
        <div>
          <h6>Please sign up</h6>
          <SignUpForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
          />
          {/* <h6>If you've already created an account, continue to login</h6> */}
        </div>
      );
    } else if (!authToken && checkSignUp) {
      return (
        <div>
          <h6>You've signed up!</h6>
          <h6>Please login:</h6>
          <Route path="/" component={LoginFormContainer} exact />
        </div>
      );
    } else {
      return (
        <div>
          <h6>Login successful!</h6>
          <p>
            Continue to <Link to={`/room`}>MainLobby</Link>
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

// import React from "react";
// import SignUpForm from "./SignUpForm";
// import { connect } from "react-redux";
// import { signup } from "../actions";
// import { Link } from "react-router-dom";

// class SignUpFormContainer extends React.Component {
//   state = { userName: "", password: "" };

//   // *****SIGNUP*****
//   onSubmit = event => {
//     event.preventDefault();
//     this.props.signup(this.state.userName, this.state.password);
//   };

//   onChange = event => {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   };

//   render() {
//     const checkSignUp = this.props.checkSignUp;
//     const authToken = this.props.authToken;
//     if (!checkSignUp) {
//       return (
//         <SignUpForm
//         onSubmit={this.onSubmit}
//         onChange={this.onChange}
//         values={this.state}
//       />
//       );
//     } else if (checkSignUp) {
//       return (
//         <div>
//           <h6>You've signed up!</h6>
//           <p>
//             Please continue to the <Link to={`/room`}>MainLobby</Link>
//           </p>
//         </div>
//       );
//     } else {
//       return (
//         <SignUpForm
//           onSubmit={this.onSubmit}
//           onChange={this.onChange}
//           values={this.state}
//         />
//       );
//     }
//   }
// }

// function mapStateToProps(state) {
//   return { checkSignUp: state.signup, authToken: state.login };
// }

// export default connect(mapStateToProps, { signup })(SignUpFormContainer);
