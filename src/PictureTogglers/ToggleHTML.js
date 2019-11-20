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
    const { isOpen } = this.props;
    if (!isOpen) {
      return <div onClick={this.props.onClick} className="square"></div>;
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
