import React, { Component } from "react";
import { connect } from "react-redux";
import Rodal from "rodal";

import { makeRequest } from "../actions";

import "rodal/lib/rodal.css";
import "./pictureFeed.scss";

class PictureFeed extends Component{
	constructor(props){
		super(props);
		this.state = { visible : false, currentPicture: null, lazyLoad: false };

		this.props.makeRequest();

		this.show = this.show.bind(this);
		this.hide = this.hide.bind(this);
		this.lazyLoadImages = this.lazyLoadImages.bind(this);
		this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount(){
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount(){
		window.removeEventListener('scroll', this.handleScroll);
	}

	show(picture) {
		this.setState({ visible: true, currentPicture : picture });
	}
	
	hide() {
		this.setState({ visible: false });
	}

	renderPictures(){
		return this.props.images.images.map((picture) => {
			return (
				<div onClick={() => this.show(picture)} key={picture.id} className="picture-feed-picture">
					<img src={picture.images.standard_resolution.url} />
				</div>
			);
		});
	}

	renderModalContent(){
		return (
			<div>
				<div className="ig-user">
					<img src={this.state.currentPicture.user.profile_picture} />
					<span>{this.state.currentPicture.user.username} </span>
				</div>
				<img src={this.state.currentPicture.images.standard_resolution.url} />
				<div className="ig-content">
					<p>{ this.state.currentPicture.caption.text }</p>
				</div>
			</div>
		);
	}

	lazyLoadImages(){
		this.props.makeRequest();
		this.setState({ lazyLoad: true });
	}

	handleScroll(){
		if(!this.state.lazyLoad)
			return;

		const el = document.querySelector(".section-picture-feed");
		const elHeight = el.getBoundingClientRect().height;
		const loadImagesAt = (window.scrollY + window.innerHeight) - (elHeight - 50);
		const isLoadImages = loadImagesAt > el.offsetTop;

		if(isLoadImages && !this.props.images.imagesLoading && this.props.images.imagesMaxId)
			this.props.makeRequest();
	}


	render(){
		return (
			<section className="section section-picture-feed">
				<div className="page-wrap-wide">
					<div className="picture-feed-container">
						{  this.props.images.images ? this.renderPictures() : null }
					</div>
					{ 
						this.props.images.imagesLoading ?
							<div className="picture-feed-loading">
								I'M LOADING!
							</div>
							: null
					}
					{ 
						this.props.images.imagesMaxId && !this.state.lazyLoad ?
							<div className="load-more-container">
								<button className="btn btn-primary" onClick={ this.lazyLoadImages }>Load More</button>
							</div>
						: null
					}
				</div>

				{
					this.state.currentPicture ?
						<Rodal 
							className="modal-container" 
							width={ this.state.currentPicture.images.standard_resolution.width + 50 } 
							height={ this.state.currentPicture.images.standard_resolution.height + 300 }  
							visible={ this.state.visible} 
							onClose={ this.hide} >

							{ this.renderModalContent() }
							
						</Rodal> 
					: null
				}
				
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