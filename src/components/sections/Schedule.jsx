import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { BsStopwatch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { eventSchedules } from "../../assets/data/data";
import shape from "../../assets/img/shape-gallery.png";

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
								<label className="btn btn-outline-primary" htmlFor="day-1">Day 1</label>
							</div>
							<div className="btn-checked">
								<input type="radio" className="btn-check" name="btnradio" id="day-2" autoComplete="off" />
								<label className="btn btn-outline-primary" htmlFor="day-2">Day 2</label>
							</div>
							<div className="btn-checked">
								<input type="radio" className="btn-check" name="btnradio" id="day-3" autoComplete="off" />
								<label className="btn btn-outline-primary" htmlFor="day-3">Day 3</label>
							</div>
						</div>
					</div>
				</div>

				<Row>
					{eventSchedules.map(item => (
						<>
							<Col lg="2" className='text-date d-flex align-items-center justify-content-end '>
								<li>
									{item.time}
								</li>
							</Col>
							<Col lg="10">
								<div className="card-info d-flex align-items-center justify-content-between">
									<div className='w-75'>
										<h3>{item.title}</h3>
										<p className='d-flex align-items-center justify-content-start'>
											<span><BsStopwatch />{item.detailTime}</span>
											<span><SlLocationPin />{item.location}</span>
										</p>
										<button className='btns'>View Details</button>
									</div>
									<div className="d-flex justify-content-end">
										{item.dataPerson.map((item, index) => (
											<div className="img-person" key={index}>
												<img src={item.img} alt="icon person" />
											</div>
										))}
									</div>
								</div>
							</Col>
						</>
					))}
				</Row>
			</Container>
		</section>
	)
}

export default Schedule
