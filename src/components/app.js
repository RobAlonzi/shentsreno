import React, { Component } from "react";

import Header from "./header";
import HeroBar from "./heroBar";
import PageDetails from "./pageDetails";
import PictureFeed from "./pictureFeed";

import "./app.scss";

export default class App extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
				<HeroBar />
				{/* <PageDetails />
				<PictureFeed /> */}
			</div>
		);
	}
} 
