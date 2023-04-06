import React, { useEffect } from 'react';
import { Container } from "react-bootstrap";
import { dataMeetLearn } from "../../assets/data/data";
import imgArrow from "../../assets/img/arrow.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Meet = () => {

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<section className="sect-meet-leard">
			<Container>

				<h3 data-aos="fade-right" data-aos-duration="2000">Meet & Learn from <br /> Community Leaders</h3>
				<div className="row gap-3">
					{dataMeetLearn.map((item, index) => (
						<div key={index} className="card border-0 col-lg-3 col-md-12" data-aos="fade-up" data-aos-duration="2000" data-aos-delay={item.aosDellay}>
							<div className="info" >
								<div className='icon animate-bounce'>
									{item.icon}
								</div>
								<p>{item.title}</p>
							</div>
						</div>
					))}
				</div>
				<div className='img-arrow-up animate-up'>
					<img src={imgArrow} alt="" className='' />
				</div>
			</Container>
		</section>
	)
}

export default Meet
