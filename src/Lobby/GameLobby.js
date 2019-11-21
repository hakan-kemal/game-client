import React, { Component } from "react";
import "./GameLobby.css";
import superagent from "superagent";
import { url } from "../url";
import Game from "../Game";

export default class GameLobby extends Component {
  onClick = async () => {
    const { login, match } = this.props;
    const { name } = match.params;
    const joinUrl = `${url}/join/${name}`;
    const response = await superagent.put(joinUrl).set({
      authorization: `Bearer ${login.jwt}`
    });
    console.log(response);
  };

  onGive = async username => {
    const { login } = this.props;
    console.log("login ?", login);
    console.log("login jwt?", login.jwt);
    const pointsUrl = `${url}/points`;
    const url = `https://localhost:4000/points`;
    console.log("url", pointsUrl);
    const response = await superagent
      .put(pointsUrl)
      .send({ username })
      .set({ authorization: `Bearer ${login.jwt}` });
  };

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

    const board = Math.floor(Math.random() * 4) + 1;

    if (board === 1 || board === 2 || board === 3 || board === 4) {
      return (
        <div>
          <div id="gameContainer">
            <h1 id="gameContent">{name}</h1>
            <button onClick={this.onClick}>Join</button>
            {player}
          </div>
          <Game />
        </div>
      );
    }
  }
}
