import React, { Component } from "react";

class Counter extends Component {
  state = {
    number: 0,
  };

  render() {
    const { number } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <button
          onClick={() => {
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log("number ::: " + number);
                console.log(this.state);
                console.log("호출완료");
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
