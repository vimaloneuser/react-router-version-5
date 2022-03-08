import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import StateProvider from "./StateProvider";
import reportWebVitals from "./reportWebVitals";
import reduceReducers from "./store/reducers";

ReactDOM.render(
	<StateProvider reducer={reduceReducers}>
		<App />
	</StateProvider>,
	document.getElementById("root")
);
reportWebVitals();