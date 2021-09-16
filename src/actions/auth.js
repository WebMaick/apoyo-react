import { types } from "../types/types";

export const startLoginEmailpassword = (email, password) => {
	return (dispatch) => {
		setTimeout(() => {
			dispatch(login(123, "Maick"));
		}, 3000);
	};
};

export const login = (uid, displayName) => {
	return {
		types: types.login,
		payload: {
			uid,
			displayName,
		},
	};
};
