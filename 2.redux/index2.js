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

const firstMiddleware = (store) => (dispatch) => (action) => {
	// dispatch 전 : 기능 추가
	console.log("액션 로깅\n", action);
	dispatch(action);
	// dispatch 후 : 기능 추가
	console.log("액션 끝");
};
// function firstMiddleware(store) {
// 	return function (next) {
// 		return function (action) {
// 		}
// 	}
// }
const enhancer = applyMiddleware(firstMiddleware);

const store = createStore(reducer, initialState, enhancer);
// react-redux 안에 들어있어요.
store.subscribe(() => {
	console.log("changed"); // 화면 바꿔주는 코드 여기서
});

console.log("1st", store.getState());

// --------------------------------

store.dispatch(
	logIn({
		id: 1,
		name: "hayoung",
		admin: true,
	})
);
console.log("2nd", store.getState());

store.dispatch(
	addPost({
		userId: 1,
		id: 1,
		content: "안녕하세요. 리덕스",
	})
);
console.log("3rd", store.getState());

store.dispatch(
	addPost({
		userId: 1,
		id: 2,
		content: "두번째 리덕스",
	})
);
console.log("4th", store.getState());

store.dispatch(logOut());
console.log("5th", store.getState());
