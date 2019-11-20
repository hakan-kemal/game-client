import React, { Component } from "react";

class ToggleSlack extends Component {
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
            alt="slack"
            src="https://a.slack-edge.com/80588/marketing/img/meta/slack_hash_256.png"
            class="codeImage"
          ></img>
        </div>
      );
    }
  }
}

export default ToggleSlack;
