import React, { Component } from "react";
import ReactModal from 'react-modal';

import "./pictureFeed.scss";

export default class PictureFeed extends Component{
	constructor(props){
		super(props);

		this.state = {
			showModal : false
		}

		this.handleOpenModal = this.handleOpenModal.bind(this);
    	this.handleCloseModal = this.handleCloseModal.bind(this);
	}

	handleOpenModal() {
		this.setState({ showModal: true });
	}
	
	handleCloseModal() {
		this.setState({ showModal: false });
	}

	renderPictures(){
		let pictures = [];

		for(let i = 0, j = 20; i < j; i++){
			pictures.push("http://via.placeholder.com/300x300");
		}

		return pictures.map((picture, i) => {
			return (
				<div key={i} className="picture-feed-picture">
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
						<button onClick={this.handleOpenModal}>Trigger Modal</button>
						{ this.renderPictures() }
 
						<ReactModal 
							isOpen={this.state.showModal}
							contentLabel="onRequestClose Example"
							onRequestClose={this.handleCloseModal}
							className="Modal"
							overlayClassName="Overlay">
							<p>Modal text!</p>
							<button onClick={this.handleCloseModal}>Close Modal</button>
       					</ReactModal>
					</div>
				</div>
			</section>
		);
	}
} 
