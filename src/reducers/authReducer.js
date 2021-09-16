/* 
cuando el usuario no esta autenticado sera un objeto vacio {}
cunado el usuario se logea tendra la sig informacion
{
    uid: dkahkjav123132,
    name: "Miguel"

}
*/

import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
	switch (action.type) {
		case types.login:
			return {
				uid: action.payload.uid,
				name: action.payload.displayName,
			};
		case types.logout:
			return {};
		default:
			return state;
	}
};
