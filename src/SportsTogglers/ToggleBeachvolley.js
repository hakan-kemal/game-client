import React, { Component } from "react";
import { beachvolley } from "../sports.images";

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
    const { isOpen } = this.props;
    if (!isOpen) {
      return <div onClick={this.props.onClick} className="square"></div>;
    } else {
      return (
        <div>
          <img alt="html" src={beachvolley} className="codeImage"></img>
        </div>
      );
    }
  }
}

export default ToggleHTML;
