import React from "react";

import "./reviews.scss";

const Reviews = (props) => {
	return (
		<section className="section-reviews page-wrap">
			<div className="reviews-intro">
				<h1>What they Say</h1>

				<div className="review-block">
					<blockquote>
					<span className="star-five"><span>10</span></span>
					Stuart was excellent and a pleasure to deal with from the initial quote, to the build to payment. The strong Carpenter team of Louis and John made our experience easy and delivered a final product above expectations. I highly recommend this company, and will be utilizing them again in the future.
					</blockquote>
					<cite>JP in Toronto</cite>
				</div>

				<div className="review-block">
					<blockquote>
					<span className="star-five"><span>10</span></span>
					Had nothing short of a great experience with Shents Renovation. WE had a pavilion pergola that was leaning to one side. After talking with other company's we were very discouraged about fixing the pergola. We were told to demo it and build a new one, which we didn't want to do. Stuart was professional and honest he knew we really wanted to keep the pergola. In the end they straightened it, re-shingled the roof and installed some brackets to stabilize it. it looks fantastic. We have more work we need to have done around the house and we will definitely be contacting Stuart at Shents Renovation.
					</blockquote>
					<cite>Simon Wood in Toronto</cite>
				</div>

				<div className="review-block">
					<blockquote>
					<span className="star-five"><span>10</span></span>
					Extremely satisfied with the services received. Stuart and his crew were very professional and knowledgeable.  During initial, negotiation phase, Stuart was patient and demonstrated expertise, which made it so much easier for us. Stuart's team executed the plan well, with minimal noise or disruption, while maintaining a good quality work, both with the retaining wall and with the fence. Closing down the project, all my comments and remarks were taken into consideration and addressed. There were no surprises with previously agreed upon price. Overall, Stuart and his crew conduct business with integrity and pride and I would highly recommend them to anyone for a similar project.
					</blockquote>
					<cite>Adnan from Toronto</cite>
				</div>

				<div className="review-block">
					<blockquote>
					<span className="star-five"><span>10</span></span>
						When we prepared our 9-year-old ground-level deck for staining in the spring, we noticed rot at the bottom of all four of the pillars supporting the pergola above it. That pergola has well-established trumpet vine growing on it, which we didn't want to lose, but obviously those pillars needed to be replaced. He and his crew were very pleasant, came on Canada Day, dealt with an unpleasant surprise when we found out the original deck builder hadn't extended the interior supports for the decorative pillars right to the top, did very attractive careful work, cleaned up the job site perfectly, and finished in a single day. I'd definitely recommend this company to other people!
					</blockquote>
					<cite>Penny</cite>
				</div>

				<div className="reviews-read-more">
					<a href="https://homestars.com/companies/2849010-shents-renovation" target="_blank" className="btn btn-primary">Read More Reviews</a>
				</div>
			</div>
		</section>
	);
}	

export default Reviews;
