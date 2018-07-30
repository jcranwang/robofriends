import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchWord: ""
    };
  }

  onSearchInput = event => {
    this.setState({ searchWord: event.target.value });
  };

  render() {
    const filterRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchWord.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f-headline">Robot Friends</h1>
        <SearchBox searchRobots={this.onSearchInput} />
        <CardList robots={filterRobots} />
      </div>
    );
  }
}

export default App;
