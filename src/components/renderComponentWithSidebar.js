import React, {Component} from "react";
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
			

		}

		componentWillReceiveProps(nextProps){
			if(nextProps.sidebar){
				document.body.classList.add('has-active-menu');
				this.confineTabbing();
			}
			else{
				document.body.classList.remove('has-active-menu');
			}

			return;
		}

		confineTabbing(){
			console.log("hello");
		}

		handleCloseSidebar(){
			this.props.toggleSidebar(false);
		}

		render(){
			return (
				<div>
					<div className={`wrapper ${this.props.sidebar ? "has-push-right" : null} `}>
						<Header />
						<ComposedComponent {...this.props} />
					</div>
					<nav id="sidebar-right" className={`sidebar-menu ${this.props.sidebar ? "is-active" : null}`}>
						<button className="sidebar-close" onClick={this.handleCloseSidebar}>&larr; Close Menu</button>
						<ul>
							<li className="c-menu__item"><a href="#" className="c-menu__link">Home</a></li>
							<li className="c-menu__item"><a href="#" className="c-menu__link">About</a></li>
							<li className="c-menu__item"><a href="#" className="c-menu__link">Services</a></li>
							<li className="c-menu__item"><a href="#" className="c-menu__link">Work</a></li>
							<li className="c-menu__item"><a href="#" className="c-menu__link">Contact</a></li>
						</ul>
					</nav>
					<div id="c-mask" className={`c-mask ${this.props.sidebar ? "is-active" : null}`} onClick={this.handleCloseSidebar}></div>
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


