import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { toggleSidebar } from "../actions";

import "./header.scss";


class Header extends Component {
	constructor(props){
		super(props);

		this.showMenu = this.showMenu.bind(this);
	}


	showMenu(e){
		e.preventDefault();
		this.props.toggleSidebar(true)
	}

	render(){
		return (
			<header className="main-header">
				<div className="page-wrap-wide">
					<div className="logo-container">
						<Link to="/" className="logo">SHENTS</Link>
					</div>

					{/* <div className="phone-container">
						(416) 460-9335
					</div> */}


					<a className="menu-icon" onClick={this.showMenu} id="menu"><span></span><span></span><span></span></a>

				
				</div>
			</header>	
		);
	}
	
}	


function mapStateToProps(state){
	return { 
		sidebar: state.sidebar
	};
}
	
export default connect(mapStateToProps, { toggleSidebar })(Header);