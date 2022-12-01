import PropTypes from "prop-types";
import "./Food.css";

const Food = (props) => {
  return (
    <div className="Food">
      <h1>{props.name}</h1>
      <p>
        이 음식은 <b>{props.store}</b>에서 판매한다
      </p>
      <p>
        가격은 단돈 <b>{props.price}</b>원!!
      </p>
    </div>
  );
};

Food.defaultProps = {
  // 디폴트값 설정 - props로 설정하면 그때는 기본값보다 props로 설정한 값이 우선적용
  name: "제육볶음",
  store: "미가",
  price: 9000,
};

Food.propTypes = {
  name: PropTypes.string.isRequired,
  store: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Food;
