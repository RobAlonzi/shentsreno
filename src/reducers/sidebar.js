import { TOGGLE_SIDEBAR } from "../actions/types";

export default function(state = false, action ){
	switch(action.type){
		case TOGGLE_SIDEBAR:
			return action.payload;
		default:
			return state;
	};
}