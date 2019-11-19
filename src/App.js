import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import LoginFormContainer from "./LoginForm/LoginFormContainer";
import SignUpFormContainer from "./SignUp/SignUpFormContainer";
import MainLobby from "./Lobby/MainLobby";

function App() {
  return (
    <Fragment>
      <Route path="/" component={LoginFormContainer} exact />
      {/* <LoginFormContainer />
      <SignUpFormContainer /> */}
      <Route path="/" component={SignUpFormContainer} exact />
      <MainLobby />
    </Fragment>
  );
}

export default App;
