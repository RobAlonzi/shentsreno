import {TOGGLE_SIDEBAR} from "./types";

export function toggleSidebar(sidebarState){
	return {
		type: TOGGLE_SIDEBAR,
		payload: sidebarState
	};
}