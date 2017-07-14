import React from "react";

import "./pageDetails.scss";

const PageDetails = (props) => {
	return (
		<section className="section-details">
			<div className="details-panel">
				<img src={require('../images/hamburger.svg')} />
				<h2>Hamburger</h2>
				<p>Spicy jalapeno bacon ipsum dolor amet dolore jowl tempor consequat flank ribeye. Voluptate tri-tip ex exercitation nisi rump ball tip short ribs labore ipsum.</p>
			</div>
			<div className="details-panel">
				<img src={require('../images/diamond.svg')} />
				<h2>Diamonds</h2>
				<p>Id ex pariatur sausage eu boudin nulla, tempor lorem do jowl swine. Excepteur corned beef proident kevin sirloin do. In non tri-tip ham shankle bone picanhavelit.</p>
			</div>
			<div className="details-panel">
				<img src={require('../images/puzzle.svg')} />
				<h2>Extreme Puzzling</h2>
				<p>Bacon tail ribeye esse shank short ribs, rump ut elit. Beef filet mignon tongue brisket. Do short ribs magna culpa frankfurter fugiat.</p>
			</div>
		</section>	
	);
}	

export default PageDetails;
