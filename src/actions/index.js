import axios from "axios";

import {TOGGLE_SIDEBAR, IMAGES_LOADING, IMAGES_SUCCESS, IMAGES_FAILED, IMAGES_MAX_ID} from "./types";
import "../../config/config";

const API_KEY = process.env.IG_API_KEY;
const COUNT = 12;

export function toggleSidebar(sidebarState){
	return {
		type: TOGGLE_SIDEBAR,
		payload: sidebarState
	};
}

function setImagesMaxId(id){
	return {
		type: IMAGES_MAX_ID,
		payload: id
	}
}

function setImagesLoading(){
	return {
		type: IMAGES_LOADING
	}
}

function setImagesSuccess(images){
	return {
		type: IMAGES_SUCCESS,
		payload: images
	}
}

function setImagesError(err){
	return {
		type: IMAGES_FAILED,
		payload: err
	}
}

export function makeRequest(){
	return (dispatch, getState) => {
		const { images : { imagesMaxId : maxId, imagesError : error } } = getState();
		let url = `https://igpi.ga/shentsrenovation/media/?count=${COUNT}`;

		dispatch(setImagesLoading());
		if(error)
			dispatch(setImagesError(null));

		if(maxId)
			url += `&max_id=${maxId}`;

		axios.get(url).then(
			res => {
				debugger;
				dispatch(parseImagesData(res.data))
			},
			err => {
				debugger;
				dispatch(parseImagesError(err))
			}
		);
	}

}

function parseImagesError(err){
	return dispatch => {
		dispatch(setImagesError(err.message));
		dispatch(setImagesLoading());
	}
}

function parseImagesData(data){
	return dispatch => {
		dispatch(setImagesMaxId(data.pagination.next_max_id || null));
		dispatch(setImagesSuccess(data.data));
		dispatch(setImagesLoading());
	}
}
