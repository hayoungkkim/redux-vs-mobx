const React = require("react");
const { useCallback } = React;
const { useDispatch, useSelector } = require("react-redux");
const { logIn, logOut } = require("./actions/user");

const App = () => {
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();

	const onClick = useCallback(() => {
		dispatch(
			logIn({
				id: "hayoungkkim",
				password: "비밀번호",
			})
		);
	}, []);
	const onLogout = useCallback(() => {
		dispatch(logOut());
	}, []);

	return (
		<div>
			{user.isLoggingIn ? <div>로그인 중</div> : user.data ? <div>{user.data.nickname}</div> : "로그인 해주세요."}
			{!user.data ? <button onClick={onClick}>로그인</button> : <button onClick={onLogout}>로그아웃</button>}
		</div>
	);
};

module.exports = App;
