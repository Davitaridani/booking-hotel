import React, { useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import imgVanue1 from "../../assets/img/img-vanue1.jpg";
import imgVanue2 from "../../assets/img/img-vanue2.jpg";
import imgArrow from "../../assets/img/arrow.png";
import imgCircle from "../../assets/img/circle.png";
import imgShape from "../../assets/img/shape3.png";
import { FiArrowRight } from "react-icons/fi";
import { FaBoxes } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";


const Vanue = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<section className="sect-vanue" id="vanue">
			<Container>
				<Row className="">
					<Col lg="3" md="3" sm="12" className="img-vanue-1 ">
						<div data-aos="fade-down-right" data-aos-duration="2000" data-aos-offset="300">

							<img src={imgVanue1} alt="" className='img-fluid' />
						</div>
						<img src={imgShape} alt="" className='img-fluid' />
					</Col>
					<Col lg="3" md="3" sm="12" className="img-vanue-2">
						<img src={imgArrow} alt="" className='animate-right-back' />
						<div data-aos="fade-down-right" data-aos-duration="2000" data-aos-offset="300" data-aos-delay="300">
							<img src={imgVanue2} alt="" />
						</div>
					</Col>
					<Col lg="6" md="6" sm="12" className='items-text-vanue'>
						<div>
							<div className="title">
								<h1 data-aos="fade-left" data-aos-delay="300" data-aos-duration="2000">Explore Meetup Venue</h1>
							</div>
							<div className="desc" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="400">
								<h3>Bangabandhu International Conference Center (BICC)</h3>
								<p>Bangabandhu International Conference Center (BICC) is the only multi-purpose convention facility in the country, having 17 (seventeen) venues for holding small to large scale events,</p>
							</div>
							<div className="items-button d-flex align-items-center">
								<button className='btns'>Get Direction <FiArrowRight /></button>
								<button className="bg-transparent  btn-transparent"><FaBoxes /> Virtual Tour</button>
							</div>
						</div>
						<img src={imgCircle} alt="" />
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default Vanue
