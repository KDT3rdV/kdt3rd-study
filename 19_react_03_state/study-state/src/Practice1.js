import React from "react";

class Practice1 extends React.Component {
  state = {
    number: 0,
  };

  render() {
    // state 데이터는 this.state로 접근가능
    const { number } = this.state; // { number = 0 }

    return (
      <div>
        <h1>{number}</h1>
        <button onClick={() => this.setState({ number: number + 2 })}>
          +2
        </button>
        <button onClick={() => this.setState({ number: number - 1 })}>
          -1
        </button>
      </div>
    );
  }
}

export default Practice1;
