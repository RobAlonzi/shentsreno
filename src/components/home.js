import React, { Component } from "react";

import HeroBar from "./heroBar";
import PageDetails from "./pageDetails";
import PictureFeed from "./pictureFeed";

import "./home.scss";

export default class Home extends Component{
	constructor(props){
		super(props);
		document.title = "Shents Renovations";
	}

	render(){
		return (
			<div>
				<HeroBar />
				<PageDetails />
				<PictureFeed />
			</div>
		);
	}
} 
