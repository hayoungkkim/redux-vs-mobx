const { createSlice } = require("@reduxjs/toolkit");
const { addPost } = require("../actions/post");

const initialState = {
	data: [],
};

const postSlice = createSlice({
	name: "post",
	initialState,
	reducers: {},
	extraReducers: {
		[addPost.pending](state, action) {},
		[addPost.fulfilled](state, action) {},
		[addPost.rejected](state, action) {},
	},
});

module.exports = postSlice;
