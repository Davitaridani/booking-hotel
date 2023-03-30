import React from 'react';
import { Container } from "react-bootstrap";
import { dataMeetLearn } from "../../assets/data/data";
import imgArrow from "../../assets/img/arrow.png";

const Meet = () => {
	return (
		<section className="sect-meet-leard">
			<Container>
				<h3>Meet & Learn from <br /> Community Leaders</h3>
				<div className="row gap-3">
					{
						dataMeetLearn.map((item) => (
							<div className="card border-0 col-lg-3 col-md-12" key={item.id}>
								<div className="info">
									<span>
										{item.icon}
									</span>
									<p>{item.title}</p>
								</div>
							</div>
						))
					}
				</div>
				<div className='img-arrow-up'>
					<img src={imgArrow} alt="" />
				</div>
			</Container>
		</section>
	)
}

export default Meet
