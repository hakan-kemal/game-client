import React, { Component } from "react";
import { Link } from "react-router-dom";
import { url } from "../url";
// import { connect } from "react-redux";
// import GameLobby from "./GameLobby";
import superagent from "superagent";
// import { Container, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default class MainLobby extends Component {
  state = {
    value: ""
  };

  reset = () => {
    console.log("hey!");
    this.setState({ value: "" });
  };

  onChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };

  onSubmit = event => {
    console.log("SUBMIT BUTTON");
    event.preventDefault();
    const { value } = this.state;
    console.log({ roomName: value });
    //const { name } = this.props.match.params;
    const postUrl = `${url}/room`;
    superagent
      .post(postUrl)
      .send({ name: value })
      .then(response => {
        console.log("response test:", response);
      });
  };

  render() {
    const { rooms } = this.props;
    // if (!rooms) {
    //   return null;
    // } else {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.onChange}
          />

          <Button type="button" variant="outline-danger" onClick={this.reset}>
            Reset
          </Button>
          <Button type="submit" variant="outline-primary">
            Submit
          </Button>
        </form>
        <h2>MainLobby</h2>
        <p>There are currently {rooms.length} game lobbies available.</p>
        {rooms.map(room => (
          <h6 key={room.name}>
            <Link to={`/room/${room.name}`}>{room.name}</Link>
          </h6>
        ))}
      </div>
    );
  }
}

// <Container>
//   <Row>
// </Row>
// <Col>
//   <Row>
// </Row>
// <Row>
//     </Row>
//   </Col>
// </Container>
