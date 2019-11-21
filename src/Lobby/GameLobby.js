import React, { Component } from "react";
import "./GameLobby.css";
// import { Link } from "react-router-dom";
// import { Col } from "react-bootstrap";
import superagent from "superagent";
import { url } from "../url";
import Game from "../Game";

export default class GameLobby extends Component {
  onClick = async () => {
    const { login, match } = this.props;
    console.log("This is the login:", login);
    console.log("This is the MATCH:", match);

    const { name } = match.params;
    console.log("This is the NAME:", name);

    const joinUrl = `${url}/join/${name}`;
    console.log("This is the URL:", joinUrl);

    const response = await superagent.put(joinUrl).set({
      authorization: `Bearer ${login.jwt}`
    });

    console.log("response test:", response);
  };

  onGive = async username => {
    console.log("Give points clicked");
    console.log("username", username);
    const { login } = this.props;
    console.log("login ?", login);
    console.log("login jwt?", login.jwt);
    const pointsUrl = `${url}/points`;

    console.log("url", pointsUrl);
    const response = await superagent
      .put(pointsUrl)
      .send({ username })
      .set({ authorization: `Bearer ${login.jwt}` });
    console.log("response", response);
  };

  // give = async username => {
  //   console.log("username:", username);
  //   const { login } = this.props;
  //   // const jwt = 'afakejwt'
  //   // const url = `https://localhost:4000/points/${username}`;
  //   const url = `https://localhost:4000/points`;

  //   const response = await superagent
  //     .put(url)
  //     .send({ username }) // if you want to use the short version url /points
  //     .set({
  //       authorization: `Bearer ${login.jwt}`
  //     });
  //   console.log("response", response);
  // };

  render() {
    const { name } = this.props.match.params;

    const { rooms } = this.props;

    const room = rooms.find(room => room.name === name);

    if (!room) {
      return "This room does not exist";
    }

    const { users } = room;

    const player =
      users && users.length ? (
        users.map(user => (
          <div key={user.userName}>
            <p>{user.userName} has entered the room.</p>
            <p>
              <button onClick={() => this.onGive(user.userName)}>Points</button>
              {/* <button onClick={this.onGive}>Points</button> */}
            </p>
            <p>
              {user.userName} has {user.points}
            </p>
          </div>
        ))
      ) : (
        <p>This room has no users</p>
      );

    // const joined = users.some(user => user.userName === user.userName);

    // console.log("joined test", joined);

    // const join = !joined && <button onClick={this.onClick}>Join</button>;

    // console.log("join button", join);

    // const playerName = users.map(player => (
    //   <h6 key={player.key}>{player.key}</h6>
    // ));

    // if (board === 1 && users.length === 1) {
    //   return `Player ${name} has entered the room!`;
    // }

    console.log("room name:", name);
    console.log("players array:", player);

    // const playerName = usersArray.map(player => (
    //   <h6 key={player.key}>{player.key}</h6>
    // ));

    const board = Math.floor(Math.random() * 4) + 1;

    if (board === 1 || board === 2 || board === 3 || board === 4) {
      return (
        <div>
          <h1>Game 1</h1>
          <h1>{name}</h1>
          <button onClick={this.onClick}>Join</button>
          {/* <button onClick={this.onGive}>Points</button> */}
          {/* <button onClick={() => this.onGive(user.name)}>Points</button> */}
          {player}
          <Game />
        </div>
      );
      // }
      // if (board === 2) {
      //   return (
      //     <div>
      //       <h1>Game 2</h1>
      //       <h1>{name}</h1>
      //       <button onClick={this.onClick}>Join</button>
      //       {player}
      //       <Game />
      //     </div>
      //   );
      // }
      // if (board === 3) {
      //   return (
      //     <div>
      //       <h1>Game 3</h1>
      //       <h1>{name}</h1>
      //       <button onClick={this.onClick}>Join</button>
      //       {player}
      //       <Game />
      //     </div>
      //   );
      // }
      // if (board === 4) {
      //   return (
      //     <div>
      //       <h1>Game 4</h1>
      //       <h1>{name}</h1>
      //       <button onClick={this.onClick}>Join</button>
      //       {player}
      //       <Game />
      //     </div>
      //   );
    }
  }
}
