import React from "react";

class Handler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "Hello World",
    };
  }

  Goodbye = () => {
    console.log(">>>>", this.state.text);
  };

  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
        <button onClick={() => this.setState({ text: "Goodbye World" })}>
          Goodbye
        </button>
      </div>
    );
  }
}

export default Handler;
