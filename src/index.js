import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "@fortawesome/fontawesome-free/css/all.css";
import "bulma/css/bulma.css";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
