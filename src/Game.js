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

export default class Game extends Component {
  state = {
    cleared: [],
    clicked: "",
    temp: ""
  };

  onClick = name => {
    const { clicked, cleared, temp } = this.state;
    if (!clicked) {
      this.setState({ clicked: name });
      return;
    } else {
      const slicedName = name.slice(0, -1);
      const sameImage = clicked.includes(slicedName);
      if (sameImage) {
        this.setState({
          cleared: [...cleared, name, clicked],
          clicked: ""
        });
      } else {
        this.setState({
          temp: [...temp, name]
        });

        setTimeout(() => {
          this.setState({
            clicked: "",
            temp: ""
          });
        }, 1000);
      }
    }
  };

  shouldBeOpen(name) {
    const { clicked, cleared, temp } = this.state;
    const shouldOpen =
      cleared.includes(name) || clicked === name || temp.includes(name);
    return shouldOpen;
  }

  render() {
    return (
      <div id="body">
        <h1>Web Technologies</h1>
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
    );
  }
}
