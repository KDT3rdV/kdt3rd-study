import "./App.css";
import Button from "./Button";
import ClassComponent from "./ClassComponent";
import Food from "./Food";
import FuncComponent from "./FuncComponent";
import Practice1 from "./Practice1";
import Practice2 from "./Practice2";
import Test1 from "./Test1";
import Test2 from "./Test2";

function App() {
  // function log() {
  //   console.log("콘솔 띄우기 성공");
  // }
  return (
    <div className="App">
      <Test1 />
      <hr />

      <Test2 />

      <Food />
      <hr />

      <Practice1
        title="나의하루는 4시 40분에 시작된다"
        author="김유진"
        price={13500}
        type="자기계발서"
      />
      <hr />

      <Practice2
        text="APP 컴포넌트에서 넘겨준 text props 입니다."
        valid={function log() {
          console.log("콘솔 띄우기 성공");
        }}
      />

      <ClassComponent name="KDT3rd" students={100} />
      {/* <ClassComponent></ClassComponent> */}
      <hr />

      <FuncComponent />
      <FuncComponent name="KDT3기" students={25} />
      <hr />

      <Button link="https://www.google.com">구글</Button>
      <Button link="https://www.daum.net">다음</Button>
      <Button></Button>
    </div>
  );
}

export default App;
