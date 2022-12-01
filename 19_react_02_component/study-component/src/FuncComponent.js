import PropTypes from "prop-types";

const FuncComponent = ({ name, students }) => {
  //   console.log(props); // { name: 'xxx', key: value, key: value, key: value ... }
  //   const { name } = props; // { name: 'xxx' }
  //   console.log(props); // { name: 'XXX', key: value, key: value }
  //   const { name, students } = props; // { name: 'XXX', students: 25 }
  const teacher = "션";

  return (
    <div>
      <h1>Hi! {teacher}</h1>
      <p>여기는 Functional Component</p>
      <p>우리는 {name}</p>
      <p>
        <b>{name}</b> 학생수는 <b>{students}</b>명 입니다.
      </p>
    </div>
  );
};

FuncComponent.defaultProps = {
  // 디폴트값 설정 - props로 설정하면 그때는 기본값보다 props로 설정한 값이 우선적용
  name: "얏호",
  students: 0,
};

FuncComponent.propTypes = {
  name: PropTypes.string.isRequired,
  students: PropTypes.number.isRequired,
};

export default FuncComponent;
