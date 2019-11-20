import React, { Component } from "react";

class ToggleTypescript extends Component {
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
            alt="typescript"
            src="https://raw.githubusercontent.com/microsoft/vscode-typescript-next/master/documentation/logo.png"
            class="codeImage"
          ></img>
        </div>
      );
    }
  }
}

export default ToggleTypescript;
