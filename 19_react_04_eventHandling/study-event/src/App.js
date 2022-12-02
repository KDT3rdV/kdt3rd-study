import "./App.css";
import ClassBind from "./ClassBind";
import Handler from "./ex/Handler_ex";
import NumberText from "./NumberText";
import Practice1 from "./Practice1";
import Practice2 from "./Practice2";
import SyntheticEvent from "./SyntheticEvent";

function App() {
  return (
    <div className="App">
      <SyntheticEvent />

      <hr />
      <NumberText />

      <hr />
      <ClassBind />

      <hr />
      <Handler />

      <hr />
      <Practice1 />

      <hr />
      <Practice2 />
    </div>
  );
}

export default App;
