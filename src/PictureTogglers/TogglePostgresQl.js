import React, { Component } from "react";

class TogglePostgresQl extends Component {
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
            alt="postgresql"
            src="https://api.nuget.org/v3-flatcontainer/npgsql.entityframeworkcore.postgresql/3.0.1/icon"
            class="codeImage"
          ></img>
        </div>
      );
    }
  }
}

export default TogglePostgresQl;
