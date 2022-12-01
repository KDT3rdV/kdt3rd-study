import React from "react";

class Test1 extends React.Component {
  render() {
    const name = "조부희";

    const my_style = {
      backgroundColor: "blue",
      color: "orange",
      fontSize: "40px",
      padding: "12",
    };

    return (
      <div style={my_style}>
        <p>{name}</p>
      </div>
    );
  }
}

export default Test1;
