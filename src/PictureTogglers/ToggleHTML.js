import React, { Component } from "react";

class ToggleHTML extends Component {
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
            alt="html"
            src="https://www.w3.org/html/logo/downloads/HTML5_Logo_256.png"
            className="codeImage"
          ></img>
        </div>
      );
    }
  }
}

export default ToggleHTML;
