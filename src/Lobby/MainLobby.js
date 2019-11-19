import React, { Component } from "react";
import { url } from "../url";
import GameLobby from "./GameLobby";
import { Container, Row } from "react-bootstrap";

export default class MainLobby extends Component {
  stream = new EventSource(`${url}/stream`);

  componentDidMount() {
    this.stream.onmessage = event => {
      this.props.gatRooms();
    };
  }

  render() {
    return (
      <Container>
        <h1>MainLobby</h1>
        <Row>
          <GameLobby number={1} />
          <GameLobby number={2} />
        </Row>
        <Row>
          <GameLobby number={3} />
          <GameLobby number={4} />
        </Row>
      </Container>
    );
  }
}
