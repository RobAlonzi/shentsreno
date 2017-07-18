import React from "react";
import { Link } from "react-router-dom";

import "./heroBar.scss";

const HeroBar = (props) => {
	return (
		<section className="section section-hero">
			<div className="page-wrap">
				<div className="hero-text">
					<h2>Home improvements. <br/> Done <mark>better.</mark></h2>
					<p>Looking for a contractor in Toronto? <br/> Shents Renovation is the right choice.</p>
					<Link to="contact" className="btn btn-primary">Let's get building</Link>
				</div>
				<div className="hero-visual">
					<img src="http://via.placeholder.com/200x250" />
				</div>
			</div>
		</section>	
	);
}	

export default HeroBar;
