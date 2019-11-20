import React, { Component } from "react";

class ToggleApollo extends Component {
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
            alt="apollo"
            src="https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/231/square_256/EGH_Apollo-GraphQL-React_Final.png"
            className="codeImage"
          ></img>
        </div>
      );
    }
  }
}

export default ToggleApollo;
