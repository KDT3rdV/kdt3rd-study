import "./App.css";
import Counter from "./Counter";
import SayFunction from "./SayFunction";
import CounterFunction from "./CounterFunction";
import Practice1 from "./Practice1";
import Practice2 from "./Practice2";
import Practice3 from "./Practice3";

function App() {
  return (
    <div className="App">
      <Practice1 />
      <hr />

      <Practice2 />
      <hr />

      <Practice3 />
      <hr />

      <Counter />
      <hr />
      <SayFunction />
      <hr />
      <CounterFunction value="일 더하기" />
    </div>
  );
}

export default App;
