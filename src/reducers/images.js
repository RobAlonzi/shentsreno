import {IMAGES_LOADING, IMAGES_SUCCESS, IMAGES_FAILED, IMAGES_MAX_ID} from "../actions/types";

const initialState = {
	imagesLoading: false,
	images: [],
	imagesMaxId: null,
	imagesError: null
}

export default function(state = initialState, action ){
	switch(action.type){
		case IMAGES_LOADING:
			return { ...state, imagesLoading: !state.imagesLoading }
		case IMAGES_SUCCESS:
			return { ...state, images: [...state.images, ...action.payload] }
		case IMAGES_MAX_ID:
			return { ...state, imagesMaxId: action.payload }
		case IMAGES_FAILED:
			return { ...state, imagesError: action.payload }
		default:
			return state;
	};
}