import React, { Component } from "react";
import ToggleBaseball from "./SportsTogglers/ToggleBaseball";
import ToggleBasketball from "./SportsTogglers/ToggleBasketball";
import ToggleBeachvolley from "./SportsTogglers/ToggleBeachvolley";
import ToggleBowling from "./SportsTogglers/ToggleBowling";
import ToggleCricket from "./SportsTogglers/ToggleCricket";
import ToggleDodgeball from "./SportsTogglers/ToggleDodgeball";
import ToggleFieldhockey from "./SportsTogglers/ToggleFieldhockey";
import ToggleFootball from "./SportsTogglers/ToggleFootball";
import ToggleGolf from "./SportsTogglers/ToggleGolf";
import ToggleHandball from "./SportsTogglers/ToggleHandball";
import ToggleIcehockey from "./SportsTogglers/ToggleIcehockey";
import ToggleLacrosse from "./SportsTogglers/ToggleLacrosse";
import TogglePool from "./SportsTogglers/TogglePool";
import ToggleRugby from "./SportsTogglers/ToggleRugby";
import ToggleSoccer from "./SportsTogglers/ToggleSoccer";
import ToggleTabletennis from "./SportsTogglers/ToggleTabletennis";
import ToggleTennis from "./SportsTogglers/ToggleTennis";
import ToggleVolleyball from "./SportsTogglers/ToggleVolleyball";
// import ToggleWaterpolo from "./SportsTogglers/ToggleWaterpolo";

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
            isOpen={this.shouldBeOpen("tennis1")}
            onClick={() => this.onClick("tennis1")}
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
    );
  }
}
