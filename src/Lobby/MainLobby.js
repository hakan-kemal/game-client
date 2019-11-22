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
    event.preventDefault();
    const { value } = this.state;
    const postUrl = `${url}/room`;
    superagent
      .post(postUrl)
      .send({ name: value })
      .then(response => {
        return;
      });
  };

  onClickJoin = async () => {
    const { login, match } = this.props;
    console.log("login?", login);
    const { name } = match.params;
    const joinUrl = `${url}/join/${name}`;
    const response = await superagent.put(joinUrl).set({
      authorization: `Bearer ${login.jwt}`
    });
    console.log(response);
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
              className="form-control"
              value={this.state.value}
              onChange={this.onChange}
              placeholder="Create a Game"
            />

            {/*<Button type="button" variant="outline-danger" onClick={this.reset}>
              Reset
    </Button>*/}
            <br></br>
            <Button type="submit" variant="outline-primary">
              Create game
            </Button>
          </form>
          <br></br>
          <h5>There are currently {rooms.length} games available:</h5>
          {rooms.map(room => (
            <h6 key={room.name}>
              <Link to={`/room/${room.name}`}>{room.name}</Link>

              {/* <Button
                style={{ margin: "0 5px 0 5px" }}
                onClick={this.onClickJoin}
              >
                JOIN
              </Button> */}
            </h6>
          ))}
        </div>
      </div>
    );
  }
}
