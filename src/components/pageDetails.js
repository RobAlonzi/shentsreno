import React from "react";

import "./pageDetails.scss";

const PageDetails = (props) => {
	return (
		<section className="section section-details">
			<div className="page-wrap">
				<div className="details-panel">
					<h2>Free Estimates</h2>
					<p>We make your ideas a reality by providing you a free consultation session, followed by an estimate to let you know exactly what will be needed to bring your ideas to life.</p>
				</div>
				<div className="details-panel">
					<h2>Competitive Rates</h2>
					<p>Our services are provided to you at the most competitive rates, no matter the size of the project. Shents Renovation believes that no job is too big or small; we will take on the project with careful attention to quality and detail.</p>
				</div>
				<div className="details-panel">
					<h2>Expert Services</h2>
					<p>We have the experience, expertise, and knowledge to renovate your home and give it the rejuvenation you desire.</p>
				</div>
			</div>
		</section>	
	);
}	

export default PageDetails;
