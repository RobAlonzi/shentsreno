import React from "react";
import { Link } from "react-router-dom";

import "./footer.scss";

const placeFooter = () => {
	const el = document.querySelector("footer");

	if(el === null)
		return 0;

	const bounds = el.getBoundingClientRect(),
		innerHeight = window.innerHeight;

	if(bounds.top > innerHeight)
		return 0;
	console.log(bounds);

	return innerHeight - (bounds.top + bounds.height - 20);
}


const Footer = (props) => {
	return (
		<footer style={{marginTop: placeFooter()}}>
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

export default Footer;
