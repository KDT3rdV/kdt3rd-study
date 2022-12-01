import React from "react";
import PropTypes from "prop-types";

class Practice2 extends React.Component {
  render() {
    console.log(this.props);

    return (
      <>
        <h1>{this.props.text}</h1>
        <button onClick={this.props.valid}>콘솔메세지</button>
      </>
    );
  }
}

Practice2.defaultProps = {
  text: "이건 기본 text props입니다.",
};

Practice2.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Practice2;
