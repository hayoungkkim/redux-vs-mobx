const { createSlice } = require("@reduxjs/toolkit");
const { addPost } = require("../actions/post");

const initialState = {
	data: [],
};

const postSlice = createSlice({
	name: "post",
	initialState,
	reducers: {
		clearPost(state, action) {
			state.date = [];
		},
	},
	extraReducers: (builder) =>
		builder
			.addCase(addPost.pending, (state, action) => {})
			.addCase(addPost.fulfilled, (state, action) => {
				state.list.push(action.payload);
			})
			.addCase(addPost.rejected, (state, action) => {})
			.addMatcher((action) => {
				state.isLoading = true;
			})
			.addDefaultCase((state, action) => {
				// default
			}),
});

module.exports = postSlice;
