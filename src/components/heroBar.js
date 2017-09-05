import  React from "react";
import { Link } from "react-router-dom";

import "./heroBar.scss";



const HeroBar = () => {
	return (
		<section className="section section-hero">
			<div className="page-wrap">
				<div className="hero-text">
					<h2>
						<span className="js--add-slide-in"></span>
						<span className="js--add-fade-in">Home improvements. <br/> Done <mark>better.</mark></span>
					</h2>
					<p>
						<span className="js--add-slide-in delay-5 slide-green"></span>
						<span className="js--add-fade-in delay-5">Looking for a contractor in Toronto? <br/> Shents Renovation is the right choice.</span>
					</p>
					<Link to="contact" className="btn btn-primary js--add-fade-in delay-25">Let's get building</Link>
				</div>
				<div className="hero-visual">
					<span className="js--add-slide-in slide-green"></span>
					<span className="js--add-fade-in">
						<img src={ require("../images/heroBar.jpg") } />
					</span>
				</div>
			</div>
		</section>	
	);
}


export default HeroBar;
