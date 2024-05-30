import React, { Component } from "react";

class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  };
  scrollToTop = () => {
    this.box.scrollTop = 0;
  };

  render() {
    const style = {
      border: "1px solid black",
      height: "800px",
      width: "400px",
      overflow: "auto",
      position: "relative",
    };

    const innerStyle = {
      width: "100%",
      height: "1000px",
      background: "linear-gradient(white, black)",
    };

    return (
      <div
        style={style}
        ref={(param) => {
          console.log("referenct Param ::: ", param);
          this.box = param;
        }}
      >
        <div style={innerStyle}></div>
      </div>
    );
  }
}

export default ScrollBox;
