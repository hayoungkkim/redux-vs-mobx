import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import StoreProvider from "./Context";

// ReactDOM.render(
// 	<StoreProvider>
// 		<App />
// 	</StoreProvider>,
// 	document.querySelector("#root")
// );

ReactDOM.render(<App />, document.querySelector("#root"));
