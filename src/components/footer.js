import React, {Component} from "react";
import { Link } from "react-router-dom";

import "./footer.scss";


class Footer extends Component{
	constructor(props){
		super(props);
		this.state = { marginTop: 0 };
	}

	componentDidMount(){
		const el = document.querySelector("footer");
		
		if(el === null)
			return;
	

		const bounds = el.getBoundingClientRect(),
			outerHeight = document.documentElement.clientHeight;

		if(bounds.bottom > outerHeight)
			return;

		this.setState({ marginTop : outerHeight - bounds.bottom });
		return;
	}



	render(){
		return (
			<footer style={{ marginTop: this.state.marginTop }}>
				<div className="page-wrap-wide">
					<p>&copy; {new Date().getFullYear()}</p>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/contact">Contact</Link></li>
						<li><Link to="/reviews">What they Say</Link></li>
						<li><a href="https://www.instagram.com/shentsrenovation/" target="_blank">Instagram</a></li>
						<li><a href="https://homestars.com/companies/2849010-shents-renovation" target="_blank">Homestars</a></li>
					</ul>
				</div>
			</footer>
		);
	}
}		

export default Footer;
