import React, { Component } from "react";
import { Link } from "react-router-dom";
import { url } from "../url";
import Button from "react-bootstrap/Button";
import superagent from "superagent";

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
      <div id="mainlobbyCard">
        <div id="mainlobbyContent">
          <p>Main Lobby</p>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              class="form-control"
              value={this.state.value}
              onChange={this.onChange}
              placeholder="Create a Game"
            />

            {/*<Button type="button" variant="outline-danger" onClick={this.reset}>
              Reset
    </Button>*/}
            <br></br>
            <Button type="submit" variant="outline-primary">
              Let's play
            </Button>
          </form>
          <br></br>
          <h5>There are currently {rooms.length} games available:</h5>
          {rooms.map(room => (
            <h6 key={room.name}>
              <Link to={`/room/${room.name}`}>{room.name}</Link>
            </h6>
          ))}
        </div>
      </div>
    );
  }
}
