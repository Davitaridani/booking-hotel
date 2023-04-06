import React from "react";
import { Container } from "react-bootstrap";
import { BiDownArrowAlt } from "react-icons/bi";
import Typewriter from 'typewriter-effect';

const Herro = () => {

	return (
		<section className="herro-banner pt-0">
			<Container>
				<div className="herro-text flex-column d-flex justify-content-center align-items-center">

					<h1>
						<Typewriter
							options={{
								strings: ["Welcome To", 'Designer’s Meetup 2023'],
								autoStart: true,
								loop: true,
								pauseFor: 2000,
								delay: 150,
							}}
						/>
					</h1>

					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit quis dui lacus. Aenean purus ut ac sit. Nullam habitant at tempus ut. Enim turpis sollicitudin magna nunc facilisis id commodo.</p>
					<div className="date">
						<p>
							<span className="d-block"> 02 Feb 2023</span>
							Bangabandhu International Conference Center
						</p>
					</div>
				</div>
				<div className="btn-scroll-down text-center ">
					<button className="flex loader border-0 bounce">
						<span className="d-flex align-items-center justify-content-center ">
							<BiDownArrowAlt />
						</span>
					</button>
				</div>
			</Container>
		</section>
	);
};

export default Herro;
