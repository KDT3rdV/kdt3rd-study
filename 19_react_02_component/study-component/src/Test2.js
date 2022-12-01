import React from "react";
import XL from "./XL.jpg";

class Test2 extends React.Component {
  render() {
    const style = {
      color: "orange",
      fontSize: "40px",
      margintop: "20",
    };

    return (
      <div style={style}>
        <h2>안녕하세요</h2>
        <img src={XL} alt="" />
      </div>
    );
  }
}

export default Test2;
