import React, { Component } from "react";

class ToggleGithub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false
    };
    this.toggleBox = this.toggleBox.bind(this);
  }

  toggleBox() {
    const { opened } = this.state;
    this.setState({
      opened: !opened
    });
  }

  render() {
    const opened = this.state.opened;

    if (!opened) {
      return <div className="square" onClick={this.toggleBox}></div>;
    } else {
      return (
        <div>
          <img
            alt="github"
            src="https://my.cyclr.com/api/connectoricon/4998"
            class="codeImage"
          ></img>
        </div>
      );
    }
  }
}

export default ToggleGithub;
