import React, { Component } from "react";
import ToggleJS from "./PictureTogglers/ToggleJS";
import ToggleHTML from "./PictureTogglers/ToggleHTML";
import ToggleCSS from "./PictureTogglers/ToggleCSS";
import ToggleAngular from "./PictureTogglers/ToggleAngular";
import ToggleApollo from "./PictureTogglers/ToggleApollo";
import ToggleCodaisseur from "./PictureTogglers/ToggleCodaisseur";
import ToggleDocker from "./PictureTogglers/ToggleDocker";
import ToggleGithub from "./PictureTogglers/ToggleGithub";
import ToggleGraphQL from "./PictureTogglers/ToggleGraphQL";
import ToggleHeroku from "./PictureTogglers/ToggleHeroku";
import ToggleNodejs from "./PictureTogglers/ToggleNodejs";
import TogglePostgresQl from "./PictureTogglers/TogglePostgresQl";
import TogglePostico from "./PictureTogglers/TogglePostico";
import ToggleReact from "./PictureTogglers/ToggleReact";
import ToggleRedux from "./PictureTogglers/ToggleRedux";
import ToggleSlack from "./PictureTogglers/ToggleSlack";
import ToggleTypescript from "./PictureTogglers/ToggleTypescript";
import ToggleVScode from "./PictureTogglers/ToggleVScode";

export default class MainLobby extends Component {
  state = {
    clicked: [],
    opened: {
      postico1: false,
      postico2: false
    }
  };
  onClick(name) {}
  render() {
    return (
      <div id="body">
        <h1>Game</h1>
        <div className="square-container">
          <TogglePostico onClick={() => this.onClick("postico")} />
          <TogglePostico />
          <ToggleReact />
          <ToggleReact />
          <ToggleCSS />
          <ToggleCSS />
          <ToggleAngular />
          <ToggleAngular />
          <ToggleApollo />
          <ToggleApollo />
          <ToggleCodaisseur />
          <ToggleCodaisseur />
          <ToggleDocker />
          <ToggleDocker />
          <ToggleTypescript />
          <ToggleTypescript />
          <ToggleVScode />
          <ToggleVScode />
          <ToggleGithub />
          <ToggleGithub />
          <ToggleGraphQL />
          <ToggleGraphQL />
          <ToggleHeroku />
          <ToggleHeroku />
          <ToggleHTML />
          <ToggleHTML />
          <ToggleJS />
          <ToggleJS />
          <ToggleNodejs />
          <ToggleNodejs />
          <TogglePostgresQl />
          <TogglePostgresQl />
          <ToggleRedux />
          <ToggleRedux />
          <ToggleSlack />
          <ToggleSlack />
          <ToggleTypescript />
          <ToggleTypescript />
          <ToggleVScode />
          <ToggleVScode />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}
