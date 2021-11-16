const { observable, autorun, runInAction } = require("mobx");

const state = observable({
	compA: "a",
	compB: 12,
	compC: null,
});

autorun(() => {
	console.log("changed", state.compA);
});

runInAction(() => {
	state.compA = "c";
	state.compB = "c";
	state.compC = "c";
});

runInAction(() => {
	state.compC = "d";
});
