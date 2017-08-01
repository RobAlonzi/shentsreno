import React, { Component } from "react";
import Rodal from 'rodal';

import 'rodal/lib/rodal.css';
import "./pictureFeed.scss";

export default class PictureFeed extends Component{
	constructor(props){
		super(props);
		this.state = { visible : false }

		this.show = this.show.bind(this);
		this.hide = this.hide.bind(this);
	}

	show(picture) {
		console.log(picture);
		this.setState({ visible: true });
	}
	
	hide() {
		this.setState({ visible: false });
	}

	renderPictures(){
		let pictures = [];

		for(let i = 0, j = 20; i < j; i++){
			pictures.push("http://via.placeholder.com/300x300");
		}

		return pictures.map((picture, i) => {
			return (
				<div onClick={() => this.show(picture)} key={i} className="picture-feed-picture">
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
				<Rodal className="modal-container" visible={this.state.visible} onClose={this.hide} >
					<img src="http://via.placeholder.com/300x300" />
				</Rodal>
			</section>
		);
	}
} 
