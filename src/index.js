import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./redux/store";
import Game from "./components/game";
import "./index.css";

function ReduxGame() {
  return (
    <Provider store={store}>
      <div className="ReduxGame">
        <Game />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<ReduxGame />, rootElement);
