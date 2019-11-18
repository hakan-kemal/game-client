import React, { Component } from "react";
import superagent from "superagent";
import { Link } from "react-router-dom";
import { url } from "./constants";

export default class Rooms extends Component {
  state = {
    rooms: [],
    value: ""
  };

  stream = new EventSource(`${url}/stream`);

  componentDidMount = () => {
    this.stream.onmessage = event => {
      // Destructure the data (what was passed to stream.send)
      const { data } = event;

      // Convert the serialized string back into JavaScript data
      const parsed = JSON.parse(data);

      // Check the sent data is an array
      if (Array.isArray(parsed)) {
        // If it is, *we assume it contains ALL rooms*,
        // and replace the full list in the state
        this.setState({
          rooms: parsed
        });
      } else {
        // If it is not, *we assume it is a single room*,
        // and add it at the end of the list
        const rooms = [...this.state.rooms, parsed];

        // We replace the old list with the extended list
        this.setState({ rooms });
      }
    };
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
        console.log("response test:", response);
      });
  };

  reset = () => {
    this.setState({ value: "" });
  };

  render() {
    const list = this.state.rooms.map((name, index) => (
      <p key={index}>
        <Link to={`/room/${name}`}>{name}</Link>
      </p>
    ));

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.onChange}
          />

          <button type="button" onClick={this.reset}>
            Reset
          </button>

          <button>Submit</button>
        </form>

        {list}
      </div>
    );
  }
}
