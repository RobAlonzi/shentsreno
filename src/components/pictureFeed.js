import React, { Component } from "react";
import { connect } from "react-redux";
import Rodal from "rodal";

import { makeRequest } from "../actions";

import "rodal/lib/rodal.css";
import "./pictureFeed.scss";

class PictureFeed extends Component{
	constructor(props){
		super(props);
		this.state = { visible : false, currentPicture: null };

		this.props.makeRequest();

		this.show = this.show.bind(this);
		this.hide = this.hide.bind(this);
	}

	show(picture) {
		this.setState({ visible: true, currentPicture : picture });
	}
	
	hide() {
		this.setState({ visible: false });
	}

	renderPictures(){
		return this.props.images.images.map((picture) => {
			console.log(picture);

			return (
				<div onClick={() => this.show(picture)} key={picture.id} className="picture-feed-picture">
					<img src={picture.images.low_resolution.url} />
				</div>
			);
		});
	}

	render(){
		return (
			<section className="section section-picture-feed">
				<div className="page-wrap-wide">
					<div className="picture-feed-container">
						{  this.props.images.images ? this.renderPictures() : null }
					</div>
				</div>
				<Rodal className="modal-container" visible={this.state.visible} onClose={this.hide} >
					{ this.state.currentPicture ? <img src={this.state.currentPicture.images.standard_resolution.url} /> : null }
				</Rodal>
			</section>
		);
	}
} 

function mapStateToProps(state){
	return {
		images: state.images
	};
}

export default connect(state => { return  { images: state.images }}, { makeRequest })(PictureFeed);