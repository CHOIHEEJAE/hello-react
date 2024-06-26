import React, { Component } from "react";

class RefSample extends Component {
  input = React.createRef(); // Ref 활용하기

  handleFocus = () => {
    this.input.current.focus();
  };

  render() {
    return (
      <div>
        <input ref={this.input}></input>
      </div>
    );
  }
}

export default RefSample;
