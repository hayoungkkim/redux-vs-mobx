const { createSlice } = require("@reduxjs/toolkit");
const { logIn } = require("../actions/user");

const initialState = {
	isLoggingIn: false,
	data: null,
	email: "",
	password: "",
	prices: Array(100)
		.fill()
		.map((v, i) => (i + 1) * 100),
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		logOut(state, action) {
			state.data = null;
		},
		setEmail(state, action) {
			state.email = action.payload;
		},
		setPassword(state, action) {
			state.password = action.payload;
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
