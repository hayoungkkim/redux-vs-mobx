const logIn = (data) => {
	// action
	return {
		type: "LOG_IN",
		data,
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
