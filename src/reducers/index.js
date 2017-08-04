import { combineReducers } from 'redux';

import sidebarReducer from "./sidebar";
import imageReducer from "./images";

const rootReducer = combineReducers({
	  sidebar: sidebarReducer,
	  images: imageReducer
});

export default rootReducer;
