import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { BsStopwatch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import person1 from "../../assets/img/person/person-1.jpg";
import person2 from "../../assets/img/person/person-2.jpg";
import person3 from "../../assets/img/person/person-3.jpg";
import person4 from "../../assets/img/person/person-4.jpg";
import person5 from "../../assets/img/person/person-5.jpg";
import shape from "../../assets/img/shape-gallery.png";
import { eventSchedules } from "../../assets/data/data";

const Schedule = () => {

	return (
		<section className='sect-schedule'>
			<Container>
				<div className="title d-flex justify-content-between align-items-center">
					<div className="text">
						<img src={shape} alt="" />
						<h3>Event Schedules</h3>
					</div>
					<div className="items-btn-checked d-flex">
						<div className="d-flex" role="group" aria-label="Basic radio toggle button group">
							<div className="btn-checked">
								<input type="radio" className="btn-check" name="btnradio" id="day-1" autoComplete="off" defaultChecked />
								<label className="btn btn-outline-primary" htmlFor="day-1">Radio 1</label>
							</div>
							<div className="btn-checked">
								<input type="radio" className="btn-check" name="btnradio" id="day-2" autoComplete="off" />
								<label className="btn btn-outline-primary" htmlFor="day-2">Radio 2</label>
							</div>
							<div className="btn-checked">
								<input type="radio" className="btn-check" name="btnradio" id="day-3" autoComplete="off" />
								<label className="btn btn-outline-primary" htmlFor="day-3">Radio 3</label>
							</div>
						</div>
					</div>
				</div>

				<Row className=''>
					{eventSchedules.map(item => (
						<>
							<Col lg="2" className='d-flex align-items-center justify-content-end'>
								<li className=''>
									{item.time}
								</li>
							</Col>

							<Col lg="10" className=''>
								<div className="card-info d-flex align-items-center justify-content-between ">
									<div className=''>
										<h3>{item.title}</h3>
										<p className='d-flex align-items-center justify-content-start'>
											<span><BsStopwatch />{item.detailTime}</span>
											<span><SlLocationPin /> {item.location}</span>
										</p>
										<button className='btns'>View Details</button>
									</div>

									<div className="img-person d-flex justify-content-end">
										<img src={person1} alt="" />
										<img src={person2} alt="" />
										<img src={person3} alt="" />
										<img src={person4} alt="" />
										<img src={person5} alt="" />
									</div>
								</div>
							</Col >
						</>
					))}
				</Row>
			</Container >
		</section >
	)
}

export default Schedule
