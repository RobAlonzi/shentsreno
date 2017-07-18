import React, { Component } from "react";

import "./pictureFeed.scss";

export default class PictureFeed extends Component{
	constructor(props){
		super(props);
	}

	renderPictures(){
		let pictures = [];

		for(let i = 0, j = 20; i < j; i++){
			pictures.push("http://via.placeholder.com/300x300");
		}

		return pictures.map(picture => {
			return (
				<div className="picture-feed-picture">
					<img src={picture} />
				</div>
			);
		});
	}

	render(){
		return (
			<section className="section section-picture-feed">
				<div className="page-wrap-wide">
					<div className="picture-feed-container">
						{ this.renderPictures() }
					</div>
				</div>
			</section>
		);
	}
} 
