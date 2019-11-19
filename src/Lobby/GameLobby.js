import React, { Component } from "react";
import superagent from "superagent";
import { Link } from "react-router-dom";
import { url } from "../url";
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
