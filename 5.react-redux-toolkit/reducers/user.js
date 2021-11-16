const { createSlice } = require("@reduxjs/toolkit");
const { logIn } = require("../actions/user");

const initialState = {
	isLoggingIn: false,
	data: null,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		logOut(state, action) {
			state.data = null;
		},
	},
	extraReducers: {
		[logIn.pending](state, action) {
			state.data = null;
			state.isLoggingIn = true;
		},
		[logIn.fulfilled](state, action) {
			state.data = action.payload;
			state.isLoggingIn = false;
		},
		[logIn.rejected](state, action) {
			state.data = null;
			state.isLoggingIn = false;
		},
	},
});

module.exports = userSlice;
