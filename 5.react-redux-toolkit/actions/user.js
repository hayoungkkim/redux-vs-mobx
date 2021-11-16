const { createAsyncThunk } = require("@reduxjs/toolkit");

const delay = (time, value) =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(value);
		}, time);
	});

const logIn = createAsyncThunk("user/logIn", async (data, thunkAPI) => {
	console.log(data);
	// throw new Error("비밀번호가 틀렸습니다.");
	const result = await delay(500, {
		userId: 1,
		nickname: "hayoung",
	});
	return result;
});

module.exports = {
	logIn,
};
