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
    const { isOpen } = this.props;
    if (!isOpen) {
      return <div onClick={this.props.onClick} className="square"></div>;
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
