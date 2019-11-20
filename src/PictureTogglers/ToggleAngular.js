import React, { Component } from "react";

class ToggleAngular extends Component {
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
            alt="angular"
            src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/300/square_256/angular2.png"
            className="codeImage"
          ></img>
        </div>
      );
    }
  }
}

export default ToggleAngular;
