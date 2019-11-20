import React from "react";
import { connect } from "react-redux";
import superagent from "superagent";

class Room extends React.Component {
  onClick = async () => {
    const { jwt, match } = this.props;
    const { name } = match.params;
    // this.props.
    const url = `localhost:4000/join/${name}`;

    const response = await superagent
      .put(url)
      .set({ authorization: `Bearer ${jwt}` });

    console.log("response test:", response);
  };

  render() {
    const { name } = this.props.match.params;
    console.log("name test:", name);
    return (
      <div>
        <h2>Room Component</h2>
        <h3>{name}</h3>
        <h4>Name... Lobby</h4>
        <p>There are ... users present in the game lobby.</p>
        <button onClick={this.onClick}>JOIN</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    jwt: state.jwt
  };
}

export default connect(mapStateToProps)(Room);
