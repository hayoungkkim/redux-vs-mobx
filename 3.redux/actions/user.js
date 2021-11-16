// async action creator
const logIn = (data) => {
	return (dispatch, getState) => {
		dispatch(logInRequest(data));
		try {
			setTimeout(() => {
				dispatch(
					logInSuccess({
						userId: 1,
						nickname: "hayoung",
					})
				);
			}, 2000);
		} catch (e) {
			dispatch(logInFailure(e));
		}
	};
};

// sync action creator
const logInRequest = (data) => {
	return {
		type: "LOG_IN_REQUEST",
		data,
	};
};

const logInSuccess = (data) => {
	return {
		type: "LOG_IN_SUCCESS",
		data,
	};
};

const logInFailure = (error) => {
	return {
		type: "LOG_IN_FAILURE",
		error,
	};
};

const logOut = () => {
	return {
		type: "LOG_OUT",
	};
};

module.exports = {
	logIn,
	logOut,
};
