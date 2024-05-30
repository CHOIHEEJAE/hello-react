import React, { Component } from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null; // ref설정

  constructor(props) {
    super(props);
    console.log("constructor ::: 생성자 생성");
    console.log("           >>>>>> props ::: ", props);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    //props로 받은 값을 state에 동기화 시키는 용도
    console.log("getDerivedStateFromProps ::: ");
    console.log("           >>>>>> nextProps ::: ", nextProps);
    console.log("           >>>>>> prevState ::: ", prevState);

    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    } else {
      return null;
    }
  }

  componentDidMount() {
    // this.props 또는 this.state 를 통해 렌더링 이후 데이터를 받아 가공 (생성자 state)
    console.log(
      "componentDidMount ::: 첫렌더링 후 실행, 이벤트등록 및 비동기작업 처리 가능 브라우저 화면을 보여주기 직전에 실행"
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "shouldComponentUpdate ::: " // props나 state를 변경했을 때 리렌더링 시작여부를 지정 boolean타입 반환 (default : True)
    );
    console.log("           >>>>>> this.props ::: ", this.props);
    console.log("           >>>>>> this.state ::: ", this.state);
    console.log("           >>>>>> nextProps ::: ", nextProps);
    console.log("           >>>>>> nextState ::: ", nextState);

    return nextState.number % 10 !== 4; // 마지막자리가 4일 경우 리렌더링하지않음 (false 반환)
  }

  componentWillUnmount() {
    console.log(
      "componentWillUnmount ::: " // 컴포넌트를 DOM에서 제거할 때 실행됨, componentDidMount에서 등록한 이벤트 등을 제거할 수 있음
    );
  }

  //render 후 호출됨
  getSnapshotBeforeUpdate(prevProps, prevState, nextProps) {
    console.log("getSnapshotBeforeUpdate ::: "); // 렌더링 후 호출됨
    console.log("           >>>>>>  prevProps ::: ", prevProps);
    console.log("           >>>>>>  prevState ::: ", prevState);
    if (prevProps.color !== this.props.color) {
      return this.props.color;
    } else {
      return null;
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate ::: "); //리렌더링 후 호출
    console.log("           >>>>>>  prevProps ::: ", prevProps);
    console.log("           >>>>>>  prevState ::: ", prevState);
    console.log("           >>>>>>  snapshot ::: ", Boolean(snapshot));

    if (snapshot) {
      console.log("componentDidUpdate 업데이트 전 색상 ::: ", snapshot);
    } else {
      return null;
    }
  }

  handleClick = (e) => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  render() {
    console.log("render ::: 렌더링 시작");

    const style = {
      color: this.props.color,
    };

    console.log("render style ::: ", style);
    return (
      //  ref={(ref) => (this.myRef = ref)}
      <div>
        {/* {this.props.missing.value} */}
        <h1 style={style}>{this.state.number}</h1>
        <p>color : {this.state.color}</p>
        <button onClick={this.handleClick}>더하기버튼</button>
      </div>
    );
  }
}

export default LifeCycleSample;
