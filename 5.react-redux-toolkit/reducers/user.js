const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
	isLoggingIn: false,
	data: null,
};

// nextState = produce(prevState, (draft) => {})

const userReducer = (prevState = initialState, action) => {
	return produce(prevState, (draft) => {
		switch (action.type) {
			case "LOG_IN_REQUEST":
				draft.data = null;
				draft.isLoggingIn = true;
				break;
			case "LOG_IN_SUCCESS":
				draft.data = action.data;
				draft.isLoggingIn = false;
				break;
			case "LOG_IN_FAILURE":
				draft.data = null;
				draft.isLoggingIn = false;
				break;
			case "LOG_OUT":
				draft.data = null;
				break;
			default:
				break;
		}
	});
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		logOut(state, action) {
			state.data = null;
		},
	},
	extraReducers: {},
});

module.exports = userSlice;
