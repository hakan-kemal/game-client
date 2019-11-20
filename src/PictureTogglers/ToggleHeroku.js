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
    const opened = this.state.opened;

    if (!opened) {
      return <div className="square" onClick={this.toggleBox}></div>;
    } else {
      return (
        <div>
          <img
            alt="heroku"
            src="https://ivangabriele.gallerycdn.vsassets.io/extensions/ivangabriele/vscode-heroku/1.4.3/1563906575407/Microsoft.VisualStudio.Services.Icons.Default"
            class="codeImage"
          ></img>
        </div>
      );
    }
  }
}

export default ToggleHeroku;
