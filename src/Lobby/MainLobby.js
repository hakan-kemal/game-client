import React, { Component } from "react";
import superagent from "superagent";
import { url } from "../url";
import GameLobby from "./GameLobby";
import { Container, Row } from "react-bootstrap";
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
    console.log("SUBMIT");
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
    return (
      <Container>
        <h2>MainLobby</h2>
        <p>There are {rooms.length} game lobbies available.</p>
        {rooms.map((room, index) => (
          <h6 key={index}>
            {/* <Link to={`/room/${room.name}`}>{room.name}</Link> */}
            <GameLobby name={room.name} />
          </h6>
        ))}
        <Row>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              value={this.state.value}
              onChange={this.onChange}
            />

            <Button variant="outline-danger" type="button" onClick={this.reset}>
              Reset
            </Button>
            <Button type="submit" variant="outline-danger">
              Submit
            </Button>
          </form>
        </Row>
      </Container>
    );
  }
}

// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// export default class Room extends Component {
//   render() {
//     const { rooms } = this.props;
//     return (
//       <div>
//         <h2>Main Lobby</h2>
// <p>There are {rooms.length} game lobbies available.</p>
// {rooms.map((room, index) => (
//   <h6 key={index}>
//     <Link to={`/room/${room.name}`}>{room.name}</Link>
//   </h6>
// ))}
//       </div>
//     );
//   }
// }
