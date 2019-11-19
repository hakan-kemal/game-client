import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import LoginFormContainer from "./LoginForm/LoginFormContainer";
import SignUpFormContainer from "./SignUp/SignUpFormContainer";
import MainLobby from "./Lobby/MainLobby";
import Game from "./Game";
//import App2 from "./App2";
import "./App.css";
import Test from "./StateTest";
import { connect } from "react-redux";

function App(props) {
  return (
    <Fragment>
      <Route path="/" component={LoginFormContainer} exact />
      {/* <LoginFormContainer />
      <SignUpFormContainer /> */}
      <Route path="/" component={SignUpFormContainer} exact />
      <MainLobby />
      <Test addIcon={props.addIcon} />
      <Game />
    </Fragment>
  );
}

const mapStateToProps = state => {
  return {
    addIcon: state.addIcon
  };
};

const mapActionToProps = {};

export default connect(mapStateToProps, mapActionToProps)(App);
