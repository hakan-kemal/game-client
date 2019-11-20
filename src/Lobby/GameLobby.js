import React, { Component } from "react";
import "./GameLobby.css";
import superagent from "superagent";
import { Link } from "react-router-dom";
import { url } from "../url";
import { Col } from "react-bootstrap";

export default class GameLobby extends Component {
  render() {
    // const { name } = this.props.match.params;
    // console.log("name test:", name);
    // <h1>{name}</h1>
    //<button>JOIN</button>
    return (
      <Col>
        <h2>
          {/* {this.props.name}  */}
          {this.props.number}{" "}
          <Link to={`/room/${this.props.name}`}>{this.props.name}</Link>
        </h2>
        <p>
          {this.props.name} lobby component instance {this.props.number}{" "}
          rendered
        </p>
        {/* <div id="MyClockDisplay" className="clock"></div> */}
      </Col>
    );
  }
}
