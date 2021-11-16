const React = require("react");
const ReactDom = require("react-dom");
const { Provider } = require("react-redux");

const store = require("./store");
const App = require("./App");

ReactDom.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector("#root")
);
