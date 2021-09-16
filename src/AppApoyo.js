import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";

export const AppApoyo = () => {
	return (
		<Provider store={store}>
			<h2>Apoyo en React</h2>
		</Provider>
	);
};
