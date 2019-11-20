import React, { Component } from "react";

class ToggleHeroku extends Component {
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
            alt="heroku"
            src="https://ivangabriele.gallerycdn.vsassets.io/extensions/ivangabriele/vscode-heroku/1.4.3/1563906575407/Microsoft.VisualStudio.Services.Icons.Default"
            className="codeImage"
          ></img>
        </div>
      );
    }
  }
}

export default ToggleHeroku;
