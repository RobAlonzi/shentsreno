import React, {Component} from "react";
import Sidebar from "react-sidebar";
import { connect } from "react-redux";

import { toggleSidebar } from "../actions";

import Header from "./header";

import "./sidebar.scss";

export default function(ComposedComponent) {
	class IncludeSidebar extends Component{

		constructor(props){
			super(props);

			this.handleCloseSidebar = this.handleCloseSidebar.bind(this);
		}

		componentDidMount(){
			this.body = document.body;
			this.wrapper = document.querySelector(".wrapper");
			this.menu = document.querySelector("#sidebar-right")
			this.mask = document.querySelector("#c-mask");
		}

		componentWillReceiveProps(nextProps){
			if(nextProps.sidebar)
				this.openSidebar();
			else
				this.closeSidebar();

			return;
		}

		openSidebar(){
			this.body.classList.add('has-active-menu');
			this.wrapper.classList.add('has-push-right');
			this.menu.classList.add('is-active');
			this.mask.classList.add('is-active');

		}

		closeSidebar(){
			this.body.classList.remove('has-active-menu');
			this.wrapper.classList.remove('has-push-right');
			this.menu.classList.remove('is-active');
			this.mask.classList.remove('is-active');
		}

		handleCloseSidebar(){
			this.props.toggleSidebar(false);
		}

		render(){
			return (
				<div>
					<div className="wrapper">
						<Header />
						<ComposedComponent {...this.props} />
					</div>
					<nav id="sidebar-right" className="sidebar-menu">
						<button className="sidebar-close" onClick={this.handleCloseSidebar}>&larr; Close Menu</button>
						<ul>
							<li className="c-menu__item"><a href="#" className="c-menu__link">Home</a></li>
							<li className="c-menu__item"><a href="#" className="c-menu__link">About</a></li>
							<li className="c-menu__item"><a href="#" className="c-menu__link">Services</a></li>
							<li className="c-menu__item"><a href="#" className="c-menu__link">Work</a></li>
							<li className="c-menu__item"><a href="#" className="c-menu__link">Contact</a></li>
						</ul>
					</nav>
					<div id="c-mask" className="c-mask"></div>
				</div>
			);
		}
	}

	function mapStateToProps(state){
		return { 
			sidebar: state.sidebar
		};
	}
	
	return connect(mapStateToProps, { toggleSidebar })(IncludeSidebar);
};


