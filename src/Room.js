import React, { Component } from "react";
import superagent from "superagent";
import { url } from "./constants";

export default class Room extends Component {
  state = {
    messages: [],
    value: ""
  };

  stream = {};

  componentDidMount = () => {
    const { name } = this.props.match.params;

    const streamUrl = `${url}/streams/${name}`;

    this.stream = new EventSource(streamUrl);

    this.stream.onmessage = event => {
      // Destructure the data (what was passed to stream.send)
      const { data } = event;

      // Convert the serialized string back into JavaScript data
      const parsed = JSON.parse(data);

      // Check the sent data is an array
      if (Array.isArray(parsed)) {
        // If it is, *we assume it contains ALL messages*,
        // and replace the full list in the state
        this.setState({
          messages: parsed
        });
      } else {
        // If it is not, *we assume it is a single message*,
        // and add it at the end of the list
        const messages = [...this.state.messages, parsed];

        // We replace the old list with the extended list
        this.setState({ messages });
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

    const { name } = this.props.match.params;

    const postUrl = `${url}/message/${name}`;

    superagent
      .post(postUrl)
      .send({ message: value })
      .then(response => {
        console.log("response test:", response);
      });
  };

  reset = () => {
    this.setState({ value: "" });
  };

  render() {
    const list = this.state.messages.map((message, index) => (
      <p key={index}>{message}</p>
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
