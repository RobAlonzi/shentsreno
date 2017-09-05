import React, { Component } from "react";
import { CSSTransition } from 'react-transition-group';

import "./fade.scss";

class Fade extends Component{
	constructor(props){
		super(props);
		this.state = { load : false };
	}

	componentDidMount(){
		this.setState({ load: true });
	}

	render(){
		return (
			<CSSTransition {...this.props} timeout={250} classNames="fadeInPage" in={this.state.load}>
				{this.props.children}
			</CSSTransition>
		);
	}
} 

export default Fade;