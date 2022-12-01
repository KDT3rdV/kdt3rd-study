import PropTypes from "prop-types";
import "./Practice1.css";
import XL from "./XL.jpg";

const Practice1 = (props) => {
  return (
    <div className="Book">
      <h1 className="h1">이번주 베스트셀러</h1>
      <img src={XL} alt="책" />
      <h1>{props.title}</h1>
      <p>저자: {props.author}</p>
      <p>가격: {props.price}원</p>
      <p>구분: {props.type}</p>
    </div>
  );
};

Practice1.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export default Practice1;
