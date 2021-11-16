const { createStore, applyMiddleware } = require("redux");
const reducer = require("./reducers");
const { logIn, logOut } = require("./actions/user");
const { addPost } = require("./actions/post");

const initialState = {
	user: {
		isLoggedIn: true,
		data: null,
	},
	posts: [],
};

const firstMiddleware = (store) => (next) => (action) => {
	console.log("로깅", action);
	next(action);
};

const thunkMiddleware = (store) => (next) => (action) => {
	// 비동기
	if (typeof action === "function") {
		return action(store.dispatch, store.getState);
	}
	// 동기
	return next(action);
};

const enhancer = compose(applyMiddleware(firstMiddleware, thunkMiddleware), typeof window === "object" && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined" ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f);

const store = createStore(reducer, initialState, enhancer);

module.exports = store;
