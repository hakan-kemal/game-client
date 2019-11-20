import React, { Fragment } from "react";
import { Route } from "react-router-dom";
// import LoginFormContainer from "./LoginForm/LoginFormContainer";
import SignUpFormContainer from "./SignUp/SignUpFormContainer";
// import UserFormContainer from "./SignUp/UserFormContainer";
import MainLobby from "./Lobby/MainLobby";
import GameLobby from "./Lobby/GameLobby";
// import Game from "./Game";
import "./App.css";
import { connect } from "react-redux";
import { url } from "./url";
// import Rooms from "./Lobby/Rooms";
// import Room from "./Lobby/Room";

class App extends React.Component {
  stream = new EventSource(`${url}/stream`);

  componentDidMount() {
    this.stream.onmessage = event => {
      const { data } = event;
      const parsed = JSON.parse(data);
      this.props.dispatch(parsed);
    };
  }

  render() {
    return (
      <Fragment>
        {/* <Route path="/" component={UserFormContainer} exact /> */}
        {/* <Route path="/" component={LoginFormContainer} exact /> */}
        <Route path="/" component={SignUpFormContainer} exact />
        <Route
          path="/room"
          render={props => <MainLobby {...props} rooms={this.props.rooms} />}
        />
        <Route
          path="/room/:name"
          render={props => (
            <GameLobby
              {...props}
              rooms={this.props.rooms}
              jwt={this.props.jwt}
            />
          )}
        />
        {/* <Route path="/room" exact component={Rooms} />
        <Route path="/room/:name" component={Room} /> */}
        {/* <Game /> */}
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    jwt: state.login,
    rooms: state.rooms
  };
}

export default connect(mapStateToProps)(App);
