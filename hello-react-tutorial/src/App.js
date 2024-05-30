import React, { Component } from "react";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";

class App extends Component {
  state = {
    color: "#000000",
    number: 0,
  };
  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };
  render() {
    console.log("App.js rendering ::: ");
    return (
      <div>
        <button onClick={this.handleClick}>랜덤색상돌리기</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

export default App;
