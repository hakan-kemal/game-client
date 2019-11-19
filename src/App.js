import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import LoginFormContainer from "./LoginForm/LoginFormContainer";
import SignUpFormContainer from "./SignUp/SignUpFormContainer";
// import UserFormContainer from "./SignUp/UserFormContainer";
import MainLobby from "./Lobby/MainLobby";
// import GameLobby from "./Lobby/GameLobby";
import { connect } from "react-redux";
import { url } from "./url";
// import { GET_ROOMS } from "./actions";
// import Room from "./Lobby/Room";

class App extends React.Component {
  // first instance of a stream --> new class of eventsource; stream = new EventSource and pass through the url for the local host-- basically the --stream
  // then we need a componentdidmount
  stream = new EventSource(`${url}/stream`);

  componentDidMount() {
    this.stream.onmessage = event => {
      console.log("event test:", event);
      const { data } = event;
      console.log("is there data?", data);
      const parsed = JSON.parse(data);
      console.log("is it parsed?", parsed);
      // this.props.allRooms(parsed);
      // this.props.dispatch({
      //   type: GET_ROOMS,
      //   payload: parsed
      // });
      this.props.dispatch(parsed);
    };
  }

  // componentDidMount() {
  //   this.props.allRooms();
  // }

  render() {
    return (
      <Fragment>
        {/* <Route path="/" component={UserFormContainer} exact /> */}
        <Route path="/" component={LoginFormContainer} exact />
        <Route path="/" component={SignUpFormContainer} exact />
        <MainLobby rooms={this.props.rooms} />
        {/* <Route path="/room/" component={MainLobby} />
        <Route path="/room/:roomName" component={GameLobby} /> */}
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return { rooms: state.rooms };
}

// const mapDispatchToProps = { allRooms };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default connect(mapStateToProps)(App);
