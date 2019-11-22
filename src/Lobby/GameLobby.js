import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "./GameLobby.css";
import superagent from "superagent";
import { url } from "../url";
import ToggleJS from "../PictureTogglers/ToggleJS";
import ToggleHTML from "../PictureTogglers/ToggleHTML";
import ToggleCSS from "../PictureTogglers/ToggleCSS";
import ToggleAngular from "../PictureTogglers/ToggleAngular";
import ToggleApollo from "../PictureTogglers/ToggleApollo";
import ToggleCodaisseur from "../PictureTogglers/ToggleCodaisseur";
import ToggleDocker from "../PictureTogglers/ToggleDocker";
import ToggleGithub from "../PictureTogglers/ToggleGithub";
import ToggleGraphQL from "../PictureTogglers/ToggleGraphQL";
import ToggleHeroku from "../PictureTogglers/ToggleHeroku";
import ToggleNodejs from "../PictureTogglers/ToggleNodejs";
import TogglePostgresQl from "../PictureTogglers/TogglePostgresQl";
import TogglePostico from "../PictureTogglers/TogglePostico";
import ToggleReact from "../PictureTogglers/ToggleReact";
import ToggleRedux from "../PictureTogglers/ToggleRedux";
import ToggleSlack from "../PictureTogglers/ToggleSlack";
import ToggleTypescript from "../PictureTogglers/ToggleTypescript";
import ToggleVScode from "../PictureTogglers/ToggleVScode";
import ToggleBaseball from "../SportsTogglers/ToggleBaseball";
import ToggleBasketball from "../SportsTogglers/ToggleBasketball";
import ToggleBeachvolley from "../SportsTogglers/ToggleBeachvolley";
import ToggleBowling from "../SportsTogglers/ToggleBowling";
import ToggleCricket from "../SportsTogglers/ToggleCricket";
import ToggleDodgeball from "../SportsTogglers/ToggleDodgeball";
import ToggleFieldhockey from "../SportsTogglers/ToggleFieldhockey";
import ToggleFootball from "../SportsTogglers/ToggleFootball";
import ToggleGolf from "../SportsTogglers/ToggleGolf";
import ToggleHandball from "../SportsTogglers/ToggleHandball";
import ToggleIcehockey from "../SportsTogglers/ToggleIcehockey";
import ToggleLacrosse from "../SportsTogglers/ToggleLacrosse";
import TogglePool from "../SportsTogglers/TogglePool";
import ToggleRugby from "../SportsTogglers/ToggleRugby";
import ToggleSoccer from "../SportsTogglers/ToggleSoccer";
import ToggleTabletennis from "../SportsTogglers/ToggleTabletennis";
import ToggleTennis from "../SportsTogglers/ToggleTennis";
import ToggleVolleyball from "../SportsTogglers/ToggleVolleyball";

export default class GameLobby extends Component {
  state = {
    cleared: [],
    clicked: "",
    temp: "",
    points: 0,
    won: false,
    board: 1
  };

  componentDidMount = () => {
    const myBoard = Math.floor(Math.random() * 2) + 1;
    this.setState({
      board: myBoard
    });
  };

  onClick = async name => {
    const { clicked, cleared, temp, points } = this.state;
    if (!clicked) {
      this.setState({ clicked: name });
      return;
    } else {
      const slicedName = name.slice(0, -1);
      const sameImage = clicked.includes(slicedName);
      if (sameImage) {
        if (this.state.cleared.length === 34) {
          this.setState({
            won: true
          });
        }
        this.setState({
          cleared: [...cleared, name, clicked],
          clicked: "",
          points: points + 5
        });

        await this.onGive(5);
      } else {
        this.setState({
          temp: [...temp, name]
        });

        setTimeout(() => {
          this.setState({
            clicked: "",
            temp: "",
            points: points - 1
          });
        }, 1000);

        await this.onGive(-1);
      }
    }
  };

  pointsColour() {
    if (this.state.points === 0) {
      return "black";
    } else if (this.state.points > 0) {
      return "green";
    } else {
      return "red";
    }
  }

  shouldBeOpen(name) {
    const { clicked, cleared, temp } = this.state;
    const shouldOpen =
      cleared.includes(name) || clicked === name || temp.includes(name);
    return shouldOpen;
  }

  gameFinished() {
    if (this.state.cleared.length === 35) {
    }
  }

  onClickJoin = async () => {
    const { login, match } = this.props;
    const { name } = match.params;
    const joinUrl = `${url}/join/${name}`;
    const response = await superagent.put(joinUrl).set({
      authorization: `Bearer ${login.jwt}`
    });
    console.log(response);
  };

  onGive = async points => {
    const { login } = this.props;
    console.log("login ?", login);
    console.log("login jwt?", login.jwt);
    const pointsUrl = `${url}/points`;
    //const url = `https://localhost:4000/points`;
    console.log("url", pointsUrl);
    const response = await superagent
      .put(pointsUrl)
      .send({ points })
      .set({ authorization: `Bearer ${login.jwt}` });
    return response;
  };

  render() {
    const { name } = this.props.match.params;
    const { rooms } = this.props;
    const room = rooms.find(room => room.name === name);

    if (!room) {
      return "This room does not exist";
    }

    const { users } = room;
    // console.log("room variable:", room);
    // console.log("room.users varaible:", room.users);
    // console.log("room.users.length varaible:", room.users.length);
    const joinedUsers = room.users.length;
    console.log(joinedUsers);

    // const joinedUsers = rooms.users;
    // const lengthUsers = rooms.users.length;

    // const joinedRooms = rooms.map(room => {
    //   return room.users;
    // });

    // const joinedUsers = joinedRooms.map(user => {
    //   return user.length;
    // });

    // console.log("what is rooms:", rooms);
    // console.log("what is users:", joinedRooms);
    // console.log("what is users:", joinedUsers);

    // var limitUsers = users;

    // // if (users.length !== 2) {
    // //   return;
    // // }

    // console.log("what is users:", limitUsers);
    // console.log("what is users:", limitUsers.length);

    const player =
      users && users.length ? (
        users.map(user => (
          <div key={user.userName}>
            <p>
              {user.userName} has {user.points} points
            </p>
          </div>
        ))
      ) : (
        <p>This room has no users</p>
      );

    // const user = users.map(user => {
    //   return user.userName;
    // });

    // console.log("mapped user -->", user);

    // user={users.map(user => {
    //   return this.onGive(user.userName);
    // })}

    const points = this.state.points;

    if (this.state.won) {
      return (
        <div>
          <div id="finalscoreContainer">
            <div id="finalscoreContent">{player}</div>
          </div>
          <div id={this.pointsColour()}>Your final score: {points}</div>
          <img
            id="dance"
            src="https://media1.tenor.com/images/66286c21e00a4ef6707abb4bfe19dcb3/tenor.gif?itemid=5043292"
            alt=""
          ></img>
        </div>
      );

    } else if (joinedUsers !== 2) {
      return (
        <div className="gameContainer">
          <h1 className="gameContent">Game: {name}</h1>
          <br></br>
          <br></br>
          <Button variant="outline-primary" onClick={this.onClickJoin}>
            Join this game!
          </Button>
          <p>
            <br></br>
          </p>
          {player}
        </div>
      );
    } else {
      if (this.state.board === 1) {

      return (
        <div>
          <div className="gameContainer">
            <h1 className="gameContent">Game: {name}</h1>
            <br></br>
            <br></br>
            <p>
              <br></br>
            </p>
            {player}
          </div>
          <div id="body">
            <div id={this.pointsColour()}>Points: {points}</div>
            <div className="square-container">
              <TogglePostico
                isOpen={this.shouldBeOpen("postico1")}
                onClick={() => this.onClick("postico1")}
              />
              <ToggleHTML
                isOpen={this.shouldBeOpen("html1")}
                onClick={() => this.onClick("html1")}
              />
              <ToggleReact
                isOpen={this.shouldBeOpen("react1")}
                onClick={() => this.onClick("react1")}
              />
              <TogglePostgresQl
                isOpen={this.shouldBeOpen("postgresql1")}
                onClick={() => this.onClick("postgresql1")}
              />
              <ToggleCSS
                isOpen={this.shouldBeOpen("css1")}
                onClick={() => this.onClick("css1")}
              />
              <ToggleVScode
                isOpen={this.shouldBeOpen("vscode1")}
                onClick={() => this.onClick("vscode1")}
              />
              <ToggleHeroku
                isOpen={this.shouldBeOpen("heroku2")}
                onClick={() => this.onClick("heroku2")}
              />
              <ToggleCSS
                isOpen={this.shouldBeOpen("css2")}
                onClick={() => this.onClick("css2")}
              />
              <ToggleGithub
                isOpen={this.shouldBeOpen("github1")}
                onClick={() => this.onClick("github1")}
              />
              <ToggleAngular
                isOpen={this.shouldBeOpen("angular1")}
                onClick={() => this.onClick("angular1")}
              />
              <ToggleApollo
                isOpen={this.shouldBeOpen("apollo1")}
                onClick={() => this.onClick("apollo1")}
              />
              <ToggleRedux
                isOpen={this.shouldBeOpen("redux1")}
                onClick={() => this.onClick("redux1")}
              />
              <TogglePostico
                isOpen={this.shouldBeOpen("postico2")}
                onClick={() => this.onClick("postico2")}
              />
              <ToggleApollo
                isOpen={this.shouldBeOpen("apollo2")}
                onClick={() => this.onClick("apollo2")}
              />
              <ToggleCodaisseur
                isOpen={this.shouldBeOpen("codaisseur1")}
                onClick={() => this.onClick("codaisseur1")}
              />

              <ToggleDocker
                isOpen={this.shouldBeOpen("docker1")}
                onClick={() => this.onClick("docker1")}
              />
              <ToggleTypescript
                isOpen={this.shouldBeOpen("typescript1")}
                onClick={() => this.onClick("typescript1")}
              />
              <ToggleReact
                isOpen={this.shouldBeOpen("react2")}
                onClick={() => this.onClick("react2")}
              />
              <ToggleJS
                isOpen={this.shouldBeOpen("js1")}
                onClick={() => this.onClick("js1")}
              />
              <ToggleVScode
                isOpen={this.shouldBeOpen("vscode2")}
                onClick={() => this.onClick("vscode2")}
              />
              <ToggleGithub
                isOpen={this.shouldBeOpen("github2")}
                onClick={() => this.onClick("github2")}
              />
              <ToggleGraphQL
                isOpen={this.shouldBeOpen("graphql1")}
                onClick={() => this.onClick("graphql1")}
              />
              <ToggleCodaisseur
                isOpen={this.shouldBeOpen("codaisseur2")}
                onClick={() => this.onClick("codaisseur2")}
              />
              <ToggleHeroku
                isOpen={this.shouldBeOpen("heroku1")}
                onClick={() => this.onClick("heroku1")}
              />
              <ToggleHTML
                isOpen={this.shouldBeOpen("html2")}
                onClick={() => this.onClick("html2")}
              />
              <ToggleSlack
                isOpen={this.shouldBeOpen("slack1")}
                onClick={() => this.onClick("slack1")}
              />
              <ToggleJS
                isOpen={this.shouldBeOpen("js2")}
                onClick={() => this.onClick("js2")}
              />
              <ToggleDocker
                isOpen={this.shouldBeOpen("docker2")}
                onClick={() => this.onClick("docker2")}
              />
              <ToggleNodejs
                isOpen={this.shouldBeOpen("nodejs1")}
                onClick={() => this.onClick("nodejs1")}
              />
              <TogglePostgresQl
                isOpen={this.shouldBeOpen("postgresql2")}
                onClick={() => this.onClick("postgresql2")}
              />
              <ToggleRedux
                isOpen={this.shouldBeOpen("redux2")}
                onClick={() => this.onClick("redux2")}
              />
              <ToggleAngular
                isOpen={this.shouldBeOpen("angular2")}
                onClick={() => this.onClick("angular2")}
              />
              <ToggleTypescript
                isOpen={this.shouldBeOpen("typescript2")}
                onClick={() => this.onClick("typescript2")}
              />
              <ToggleSlack
                isOpen={this.shouldBeOpen("slack2")}
                onClick={() => this.onClick("slack2")}
              />
              <ToggleGraphQL
                isOpen={this.shouldBeOpen("graphql2")}
                onClick={() => this.onClick("graphql2")}
              />
              <ToggleNodejs
                isOpen={this.shouldBeOpen("nodejs2")}
                onClick={() => this.onClick("nodejs2")}
              />
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div id="gameContainer">
            <h1 id="gameContent">Game: {name}</h1>
            <br></br>
            <br></br>
            <Button variant="outline-primary" onClick={this.onClickJoin}>
              Join this game!
            </Button>
            <p>
              <br></br>
            </p>
            {player}
          </div>
          <div id="body">
            <div id={this.pointsColour()}>Points: {points}</div>
            <div className="square-container">
              <ToggleBaseball
                isOpen={this.shouldBeOpen("baseball1")}
                onClick={() => this.onClick("baseball1")}
              />
              <ToggleBasketball
                isOpen={this.shouldBeOpen("basketball1")}
                onClick={() => this.onClick("basketball1")}
              />
              <ToggleBeachvolley
                isOpen={this.shouldBeOpen("beachvolley1")}
                onClick={() => this.onClick("beachvolley1")}
              />
              <ToggleBowling
                isOpen={this.shouldBeOpen("bowling1")}
                onClick={() => this.onClick("bowling1")}
              />
              <ToggleCricket
                isOpen={this.shouldBeOpen("cricket1")}
                onClick={() => this.onClick("cricket1")}
              />
              <ToggleDodgeball
                isOpen={this.shouldBeOpen("dodgeball1")}
                onClick={() => this.onClick("dodgeball1")}
              />
              <ToggleFieldhockey
                isOpen={this.shouldBeOpen("fieldhockey1")}
                onClick={() => this.onClick("fieldhockey1")}
              />
              <ToggleFootball
                isOpen={this.shouldBeOpen("football1")}
                onClick={() => this.onClick("football1")}
              />
              <ToggleGolf
                isOpen={this.shouldBeOpen("golf1")}
                onClick={() => this.onClick("golf1")}
              />
              <ToggleHandball
                isOpen={this.shouldBeOpen("handball1")}
                onClick={() => this.onClick("handball1")}
              />
              <ToggleIcehockey
                isOpen={this.shouldBeOpen("icehockey1")}
                onClick={() => this.onClick("icehockey1")}
              />
              <ToggleLacrosse
                isOpen={this.shouldBeOpen("lacrosse1")}
                onClick={() => this.onClick("lacrosse1")}
              />
              <TogglePool
                isOpen={this.shouldBeOpen("pool1")}
                onClick={() => this.onClick("pool1")}
              />
              <ToggleRugby
                isOpen={this.shouldBeOpen("rugby1")}
                onClick={() => this.onClick("rugby1")}
              />
              <ToggleSoccer
                isOpen={this.shouldBeOpen("soccer1")}
                onClick={() => this.onClick("soccer1")}
              />
              <ToggleTabletennis
                isOpen={this.shouldBeOpen("tabletennis1")}
                onClick={() => this.onClick("tabletennis1")}
              />
              <ToggleTennis
                isOpen={this.shouldBeOpen("tennisx1")}
                onClick={() => this.onClick("tennisx1")}
              />
              <ToggleVolleyball
                isOpen={this.shouldBeOpen("volleyball1")}
                onClick={() => this.onClick("volleyball1")}
              />
              <ToggleBaseball
                isOpen={this.shouldBeOpen("baseball2")}
                onClick={() => this.onClick("baseball2")}
              />
              <ToggleBasketball
                isOpen={this.shouldBeOpen("basketball2")}
                onClick={() => this.onClick("basketball2")}
              />
              <ToggleBeachvolley
                isOpen={this.shouldBeOpen("beachvolley2")}
                onClick={() => this.onClick("beachvolley2")}
              />
              <ToggleBowling
                isOpen={this.shouldBeOpen("bowling2")}
                onClick={() => this.onClick("bowling2")}
              />
              <ToggleCricket
                isOpen={this.shouldBeOpen("cricket2")}
                onClick={() => this.onClick("cricket2")}
              />
              <ToggleDodgeball
                isOpen={this.shouldBeOpen("dodgeball2")}
                onClick={() => this.onClick("dodgeball2")}
              />
              <ToggleFieldhockey
                isOpen={this.shouldBeOpen("fieldhockey2")}
                onClick={() => this.onClick("fieldhockey2")}
              />
              <ToggleFootball
                isOpen={this.shouldBeOpen("football2")}
                onClick={() => this.onClick("football2")}
              />
              <ToggleGolf
                isOpen={this.shouldBeOpen("golf2")}
                onClick={() => this.onClick("golf2")}
              />
              <ToggleHandball
                isOpen={this.shouldBeOpen("handball2")}
                onClick={() => this.onClick("handball2")}
              />
              <ToggleIcehockey
                isOpen={this.shouldBeOpen("icehockey2")}
                onClick={() => this.onClick("icehockey2")}
              />
              <ToggleLacrosse
                isOpen={this.shouldBeOpen("lacrosse2")}
                onClick={() => this.onClick("lacrosse2")}
              />
              <TogglePool
                isOpen={this.shouldBeOpen("pool2")}
                onClick={() => this.onClick("pool2")}
              />
              <ToggleRugby
                isOpen={this.shouldBeOpen("rugby2")}
                onClick={() => this.onClick("rugby2")}
              />
              <ToggleSoccer
                isOpen={this.shouldBeOpen("soccer2")}
                onClick={() => this.onClick("soccer2")}
              />
              <ToggleTabletennis
                isOpen={this.shouldBeOpen("tabletennis2")}
                onClick={() => this.onClick("tabletennis2")}
              />
              <ToggleTennis
                isOpen={this.shouldBeOpen("tennis2")}
                onClick={() => this.onClick("tennis2")}
              />
              <ToggleVolleyball
                isOpen={this.shouldBeOpen("volleyball2")}
                onClick={() => this.onClick("volleyball2")}
              />
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
          ); }
        </div>
      );
    }
}
  }
}
