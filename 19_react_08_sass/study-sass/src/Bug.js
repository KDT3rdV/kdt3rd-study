import "./styles/Bug.scss";
import Grass from "./Grass.png";

function Bug() {
  // JSX 문법
  // 1. 컴포넌트에 여러요소 있으면 반드시 부모 요소 하나로 감싸야 함!
  return (
    <div className="Bug">
      <div className="circle div1"></div>
      <div className="circle div2"></div>
      <div className="circle div3"></div>
      <div className="circle div4"></div>
      <div className="circle div5"></div>
      <div className="circle div6"></div>
      <div className="circle div7"></div>
      <img src={Grass} alt="풀" />
    </div>
  );
}

export default Bug;
