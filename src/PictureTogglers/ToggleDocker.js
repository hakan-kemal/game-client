import React, { Component } from "react";

class ToggleDocker extends Component {
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
            alt="docker"
            src="https://miro.medium.com/max/256/1*hAr6l4rDtb1fWtF1CcW7YQ.png"
            className="codeImage"
          ></img>
        </div>
      );
    }
  }
}

export default ToggleDocker;
