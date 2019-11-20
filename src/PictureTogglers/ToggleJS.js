import React from "react";

class ToggleJS extends React.Component {
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
            alt="js"
            src="https://www.phphulp.nl/img/nieuws/goedkeuring-voor-standaard-javascript-6-454.png"
            className="codeImage"
          ></img>
        </div>
      );
    }
  }
}

export default ToggleJS;
