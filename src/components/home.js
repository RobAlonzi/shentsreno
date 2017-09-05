import React, { Component } from "react";

import HeroBar from "./heroBar";
import PageDetails from "./pageDetails";
import PictureFeed from "./pictureFeed";
import Footer from "./footer";

import "./home.scss";

export default class Home extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
				<HeroBar />
				<PageDetails />
				<PictureFeed />
				<Footer />
			</div>
		);
	}
} 
