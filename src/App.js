import React from "react";
import "./App.scss";
import { Login, Register } from "./components/login/index";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true,
    };
  }

  // will change to using hooks later. smentara pake ini dulu kalo udah jadi lalu bariu pahami life cycle dan ubah ke hooks
  componentDidMount() {
    // by default tambahkan .right pada class
    // kenapa this.rightSiderere? dia siapa?
    // kenapa dia bisa punya atribut classlist?
    this.rightSiderere.classList.add("right");
  }

  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSiderere.classList.remove("right");
      this.rightSiderere.classList.add("left");
    } else {
      this.rightSiderere.classList.remove("left");
      this.rightSiderere.classList.add("right");
    }

    this.setState((prevState) => ({
      isLogginActive: !prevState.isLogginActive
    }));
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login"; //ini buat apa yak?
    const currentActive = isLogginActive ? "login" : "register";

    return (
      <div className="App">
        <div className="login">
          {/* ref di sini gubanya apa ? */}
          <div className="container" ref={ref => (this.container = ref)}>
            {/* belum tau guna ref dan this current dalam case ini dan ref yang ini pun gunanya apa?*/}
            {isLogginActive && (
              <Login containerRef={ref => (this.current = ref)} />
            )}
            {!isLogginActive && (
              <Register containerRef={ref => (this.current = ref)} />
            )}
          </div>
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={ref => (this.rightSiderere = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default App;
