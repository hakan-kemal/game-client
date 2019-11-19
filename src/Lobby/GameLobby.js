import React, { Component } from "react";
import { Col } from "react-bootstrap";

export default class GameLobby extends Component {
  render() {
    return (
      <Col>
        <h2>GameLobby {this.props.number}</h2>
        <p>Game lobby component instance {this.props.number} rendered </p>
      </Col>
    );
  }
}
