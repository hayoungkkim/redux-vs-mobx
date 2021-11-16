const { createStore } = require("redux");

// 새로운 state 만들어주기
const reducer = (prevState, action) => {
	switch (action.type) {
		case "CHANGE_COMP_A":
			return {
				...prevState,
				compA: action.data,
			};
		case "CHANGE_COMP_B":
			return {
				...prevState,
				compB: action.data,
			};
		case "CHANGE_COMP_C":
			return {
				...prevState,
				compC: action.data,
			};
		default:
			return prevState;
	}
};

const initialState = {
	compA: "a",
	compB: 12,
	compC: null,
};

const store = createStore(reducer, initialState);
// react-redux 안에 들어있어요.
store.subscribe(() => {
	console.log("changed"); // 화면 바꿔주는 코드 여기서
});

console.log("1st", store.getState());

const changeCompA = (data) => {
	// action
	return {
		type: "CHANGE_COMP_A",
		data,
	};
};

store.dispatch(changeCompA("b"));

console.log("2nd", store.getState());
