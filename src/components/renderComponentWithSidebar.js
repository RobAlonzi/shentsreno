import React, {Component} from "react";
import Sidebar from "react-sidebar";
import { connect } from "react-redux";

import Header from "./header";

export default function(ComposedComponent) {
	class IncludeSidebar extends Component{

		render(){
			var sidebarContent = <b>Sidebar content</b>;

			return ( 
				<Sidebar sidebar={sidebarContent} open={this.props.sidebar}>
					<Header />
					<ComposedComponent {...this.props} />
				</Sidebar>
			);
		}
	}

	function mapStateToProps(state){
		return { 
			sidebar: state.sidebar
		};
	}
	
	return connect(mapStateToProps)(IncludeSidebar);
};