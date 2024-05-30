import React, { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
  render() {
    const { name, number, children } = this.props; //비구조화할당
    return (
      <div>
        {name} <br />
        {number} <br />
        {children} <br />
      </div>
    );
  }
}

MyComponent.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number.isRequired, // 필수값 (콘솔창에 에러발생)
};
export default MyComponent;
