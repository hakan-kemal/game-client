import React, { Component } from "react";

class TogglePostico extends Component {
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
            alt="postico"
            src="https://static.macupdate.com/products/53411/l/postico-logo.png?v=1570548229"
            className="codeImage"
          ></img>
        </div>
      );
    }
  }
}

export default TogglePostico;
