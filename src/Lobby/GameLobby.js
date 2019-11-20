import React, { Component } from "react";
import "./GameLobby.css";
// import { Link } from "react-router-dom";
// import { Col } from "react-bootstrap";
import superagent from "superagent";
import { url } from "../url";
import Game from "../Game";

export default class GameLobby extends Component {
  onClick = async () => {
    const { jwt, match } = this.props;
    const { name } = match.params;

    const joinUrl = `${url}/join/${name}`;

    const response = await superagent.put(joinUrl).set({
      authorization: `Bearer ${jwt}`
    });

    console.log("response test:", response);
  };

  render() {
    const { name } = this.props.match.params;

    const { rooms } = this.props;

    console.log("rooms test:", rooms);

    const room = rooms.find(room => room.name === name);

    if (!room) {
      return "This room does not exist";
    }

    const { users } = room;

    const list =
      users && users.length ? (
        users.map(user => (
          <p key={user.name}>
            {user.name} [{user.points}]
          </p>
        ))
      ) : (
        <p>This room has no users</p>
      );

    console.log("list test:", list);

    return (
      <div>
        <h1>{name}</h1>

        <button onClick={this.onClick}>Join</button>

        {list}

        <Game />
      </div>
    );
  }

  /*      <Col>
//         <h2>
//           {/* {this.props.name}  */
}
//           {this.props.number}{" "}
//           <Link to={`/room/${this.props.name}`}>{this.props.name}</Link>
//         </h2>
//         <p>
//           {this.props.name} lobby component instance {this.props.number}{" "}
//           rendered
//         </p>
//         {/* <div id="MyClockDisplay" className="clock"></div> */}
//       </Col>
//     );
//   }
// */
