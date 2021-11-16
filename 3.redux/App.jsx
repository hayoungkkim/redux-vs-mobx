const React = require("react");
const { useCallback } = React;
const { useDispatch, useSelector } = require("react-redux");
const { logIn } = require("./actions/user");

const App = () => {
	const user = useSelector((state) => {
		state.user.data;
	});
	const dispatch = useDispatch();

	const onClick = useCallback(() => {
		dispatch(
			logIn({
				isLoggedIn: true,
				data: {
					id: "hayoungkkim",
					password: "비밀번호",
				},
			})
		);
	}, []);

	return (
		<div>
			{user ? <div>{user.id}</div> : "로그인 해주세요."}
			<button onClick={onClick}>로그인</button>
		</div>
	);
};

module.exports = App;
