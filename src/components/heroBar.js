import React from "react";
import { Link } from "react-router-dom";

import "./heroBar.scss";

const HeroBar = (props) => {
	return (
		<section className="section-hero">
			<h2>Home improvements. <br/> Done <mark>better.</mark></h2>
			<p>When it comes to finding a residential contractor for your home in the Toronto area, Shents Renovation is the right choice.</p>
			<Link to="contact" className="btn btn-primary">Let's get building</Link>
		</section>	
	);
}	

export default HeroBar;
