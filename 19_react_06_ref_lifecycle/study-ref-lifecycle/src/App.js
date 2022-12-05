import "./App.css";
import LifeCycleClass from "./LifeCycleClass";
import LifeCycleFunc from "./LifeCycleFunc";
import PostList from "./PostList";
// import Practice1 from "./Practice1";
// import RefSample1 from "./RefSample1";
// import RefSample2 from "./RefSample2";
// import RefSample3 from "./RefSample3";
// import RefSample4 from "./RefSample4";

function App() {
  return (
    <div className="App">
      {/* <RefSample1 />
      <hr />
      <RefSample2 />
      <hr />
      <RefSample3 />
      <hr />
      <RefSample4 />
      <hr />
      <Practice1 />
      <hr /> */}
      <LifeCycleFunc />
      <hr />
      <LifeCycleClass />
      <hr />
      <PostList />
    </div>
  );
}

export default App;
