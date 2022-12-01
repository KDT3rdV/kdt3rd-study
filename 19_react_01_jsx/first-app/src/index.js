import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import Clock from './Clock';
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<h1>Hello World!!!</h1>);

// setInterval(() => {
//   root.render(<Clock />);
// }, 1000);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
