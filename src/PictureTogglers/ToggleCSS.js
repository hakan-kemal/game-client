import React, { Component } from "react";

class ToggleCSS extends Component {
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
            alt="css"
            src="http://www.freesite.wakeupict.com/wp-content/uploads/css3-256.png"
            className="codeImage"
          ></img>
        </div>
      );
    }
  }
}

export default ToggleCSS;
