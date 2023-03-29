import React from "react";
import { Container } from "react-bootstrap";
import { BiDownArrowAlt } from "react-icons/bi";

const Herro = () => {
	return (
		<section className="herro-banner pt-0">
			<Container>
				<div className="herro-text flex-column d-flex justify-content-center align-items-center">
					<h1>Designer’s Meetup 2023</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit quis dui lacus. Aenean purus ut ac sit. Nullam habitant at tempus ut. Enim turpis sollicitudin magna nunc facilisis id commodo.</p>
					<div className="date">
						<p>
							<span className="d-block"> 02 Feb 2023</span>
							Bangabandhu International Conference Center
						</p>
					</div>
				</div>
				<div className="btn-scroll-down d-block text-center">
					<button className="bg-transparent border-0">
						<span className="d-flex align-items-center justify-content-center">
							<BiDownArrowAlt />
						</span>
					</button>
				</div>
			</Container>
		</section>
	);
};

export default Herro;
