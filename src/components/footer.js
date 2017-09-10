import React, {Component} from "react";
import { Link } from "react-router-dom";

import "./footer.scss";


class Footer extends Component{
	constructor(props){
		super(props);
		this.state = { margin: 0 };
	}

	componentDidMount(){
		const el = document.querySelector("footer");
		
		if(el === null)
			return;
	
		const bounds = el.getBoundingClientRect(),
			innerHeight = window.innerHeight;
	
		if(bounds.top > innerHeight)
			return;
		
		this.setState({ margin: innerHeight - (bounds.top + bounds.height - 18.5) });
		return;
	}



	render(){
		return (
			<footer style={{ marginTop: this.state.margin }}>
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
