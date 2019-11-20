import React, { Component } from "react";
import { soccer } from "./sports.images";
import { football } from "./sports.images";
import { baseball } from "./sports.images";
import { basketball } from "./sports.images";
import { volleyball } from "./sports.images";
import { golf } from "./sports.images";
import { tennis } from "./sports.images";
import { bowling } from "./sports.images";
import { beachvolley } from "./sports.images";
import { cricket } from "./sports.images";
import { pool } from "./sports.images";
import { icehockey } from "./sports.images";
import { handball } from "./sports.images";
import { fieldhockey } from "./sports.images";
import { lacrosse } from "./sports.images";
import { tabletennis } from "./sports.images";
import { rugby } from "./sports.images";
import { dodgeball } from "./sports.images";
import { waterpolo } from "./sports.images";

class ToggleBaseball extends Component {
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
          <img alt="baseball" src={baseball} className="codeImage"></img>
        </div>
      );
    }
  }
}

export default ToggleBaseball;
