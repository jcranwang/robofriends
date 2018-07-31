import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchWord: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        this.setState({ robots: users });
      });
  }

  onSearchInput = event => {
    this.setState({ searchWord: event.target.value });
  };

  render() {
    const { robots, searchWord } = this.state;
    const filterRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (robots.length === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">Robot Friends</h1>
          <SearchBox searchRobots={this.onSearchInput} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filterRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
