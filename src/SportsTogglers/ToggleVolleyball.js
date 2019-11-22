import React, { Component } from "react";
import { volleyball } from "../sports.images";

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
    const { isOpen } = this.props;
    if (!isOpen) {
      return <div onClick={this.props.onClick} className="square"></div>;
    } else {
      return (
        <div>
          <img alt="docker" src={volleyball} className="codeImage"></img>
        </div>
      );
    }
  }
}

export default ToggleDocker;
