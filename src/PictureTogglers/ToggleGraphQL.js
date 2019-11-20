import React, { Component } from "react";

class ToggleGraphQL extends Component {
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
            alt="graphql"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/128px-GraphQL_Logo.svg.png"
            className="codeImage"
          ></img>
        </div>
      );
    }
  }
}

export default ToggleGraphQL;
