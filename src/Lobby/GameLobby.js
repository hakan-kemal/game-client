import React, { Component } from "react";
import "./GameLobby.css";
// import { Link } from "react-router-dom";
// import { Col } from "react-bootstrap";
import superagent from "superagent";
import { url } from "../url";
import Game from "../Game";

export default class GameLobby extends Component {
  onClick = async () => {
    const { jwt, match } = this.props;
    console.log("This is the JWT:", jwt);
    console.log("This is the MATCH:", match);

    const { name } = match.params;
    console.log("This is the NAME:", name);

    const joinUrl = `${url}/join/${name}`;
    console.log("This is the URL:", joinUrl);

    const response = await superagent.put(joinUrl).set({
      authorization: `Bearer ${jwt}`
    });

    console.log("response test:", response);
  };

  render() {
    const { name } = this.props.match.params;
    console.log("rendered name:", name);

    const { rooms } = this.props;
    console.log("rendered roomS:", rooms);

    const room = rooms.find(room => room.name === name);
    console.log("rendered room:", room);

    if (!room) {
      return "This room does not exist";
    }

    const { users } = room;
    console.log("rendered userS:", users);

    const list =
      users && users.length ? (
        users.map(user => (
          <p key={user.name}>
            {user.name} [{user.points}]
          </p>
        ))
      ) : (
        <p>This room has no users</p>
      );

    console.log("list test:", list);
    console.log("list test:", list);

    const board = Math.floor(Math.random() * 4) + 1;

    if (board === 1) {
      return (
        <div>
          <h1>Game 1</h1>
          <h1>{name}</h1>
          <button onClick={this.onClick}>Join</button>
          {list}
          <Game />
        </div>
      );
    }
    if (board === 2) {
      return (
        <div>
          <h1>Game 2</h1>
          <h1>{name}</h1>
          <button onClick={this.onClick}>Join</button>
          {list}
          <Game />
        </div>
      );
    }
    if (board === 3) {
      return (
        <div>
          <h1>Game 3</h1>
          <h1>{name}</h1>
          <button onClick={this.onClick}>Join</button>
          {list}
          <Game />
        </div>
      );
    }
    if (board === 4) {
      return (
        <div>
          <h1>Game 4</h1>
          <h1>{name}</h1>
          <button onClick={this.onClick}>Join</button>
          {list}
          <Game />
        </div>
      );
    }
  }
}
