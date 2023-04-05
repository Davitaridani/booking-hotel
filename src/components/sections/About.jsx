import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { MdOutlineDateRange } from 'react-icons/md';
import { SlLocationPin } from 'react-icons/sl';
import Button from '../UI/Button';
import imgProfile1 from "../../assets/img/profile-about.jpg";
import imgShape from "../../assets/img/shape.png";
import imgProfile2 from "../../assets/img/profile-about2.jpg";
import imgShape2 from "../../assets/img/shape2.png";
import imgSyrcle from "../../assets/img/syrcle.png";


const About = () => {
	return (
		<section className="sect-about">

			<Container>
				<img src={imgSyrcle} alt="Syrcle" />
				<Row>
					<Col lg="6" sm="12" className="about-info d-flex align-items-center">
						<div className="">
							<div className="title w-75">
								<h1>About <br className='d-block d-md-none' /> Meetup Event</h1>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit quis dui lacus. Aenean purus ut ac sit. Nullam habitant at tempus ut. Enim turpis sollicitudin magna nunc facilisis odo.Lorem ipsum dolor sit amet, consectetur adipiscing sit quis dui lacus.</p>
							</div>
							<div className="info-event d-flex gap-5">
								<div className="items-event d-flex align-items-center gap-2">
									<span>
										<MdOutlineDateRange />
									</span>
									<div className="events">
										<h3>Event</h3>
										<p>Friday to Sunday, <br /> 1-3 July 2022</p>
									</div>
								</div>
								<div className="items-event  d-flex align-items-center gap-2">
									<span>
										<SlLocationPin />
									</span>
									<div className="events">
										<h3>Location</h3>
										<p>Bangabandhu International Conference Center, <br />
											Begum Rokeya Avenue, Dhaka-1207</p>
									</div>
								</div>
							</div>
							<div className="items-btn d-flex align-items-center gap-3">
								<Button />
								<button className='learn-more bg-transparent'>Learn More</button>
							</div>
						</div>
					</Col>

					<Col lg="6" sm="12" className='items-profile d-block d-md-flex gap-3'>
						<div className="profile-about-1">
							<img src={imgProfile1} alt="profile 1" className='' />
							<img src={imgShape} alt="" />
						</div>
						<div className="profile-about-2">
							<img src={imgShape2} alt="shape" className='float-end mb-4' />
							<img src={imgProfile2} alt="profile 1" className='' />
						</div>
					</Col>
				</Row>

			</Container>
		</section>
	)
}

export default About
