import React, { useState, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit"; // reselect

const { logIn } = require("./actions/user");
const userSlicer = require("./reducers/userSlice");

const priceSelector = (state) => state.user.prices;
const sumPriceSelector = createSelector(priceSelector, (prices) => prices.reduce((a, c) => a + c, 0));

const App = () => {
	const user = useSelector((state) => state.user);
	const totalPrice = useSelector(sumPriceSelector);
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onClick = useCallback(() => {
		dispatch(
			logIn({
				id: "hayoungkkim",
				password: "비밀번호",
			})
		);
	}, []);

	const onLogout = useCallback(() => {
		dispatch(userSlicer.actions.logOut());
	}, []);

	const onChangeEmail = useCallback((e) => {
		// dispatch(userSlicer.actions.setEmail(e.target.value));
		setEmail(e.target.value);
	}, []);

	const onChangePassword = useCallback((e) => {
		// dispatch(userSlicer.actions.setPassword(e.target.value));
		setPassword(e.target.value);
	}, []);

	const onSubmit = useCallback(
		(e) => {
			e.preventDefault();
			dispatch(
				userSlicer.actions.setLoginForm({
					email,
					password,
				})
			);
		},
		[dispatch, email, password]
	);

	// const totalPrice = useMemo(() => {
	// 	console.log("memo");
	// 	return prices.reduce((a, c) => a + c, 0); // 100만번 연산이라 가정
	// }, [prices]);

	return (
		<div>
			{user.isLoggingIn ? <div>로그인 중</div> : user.data ? <div>{user.data.nickname}</div> : "로그인 해주세요."}
			{!user.data ? <button onClick={onClick}>로그인</button> : <button onClick={onLogout}>로그아웃</button>}
			<div>
				<b>{totalPrice}원</b>
			</div>
			<form action={onSubmit}>
				<input type="email" value={email} onChange={onChangeEmail} />
				<input type="password" value={password} onChange={onChangePassword} />
			</form>
		</div>
	);
};

export default App;
