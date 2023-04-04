import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { dataSpeakers } from "../../assets/data/data";
import imgSyrcle from "../../assets/img/syrcle.png";

const Speakers = () => {
	return (
		<section className="sect-speakers">
			<Container>
				<Row>
					{dataSpeakers.map((item, index) => (
						<Col lg="3" sm="12" key={index} >
							<div className="items-speakers">
								<img src={item.img} alt="" className='img-fluid' />
								<div className="info-speakers">
									<h3>{item.name}</h3>
									<p>{item.jobDesk}</p>
									<div className="icon-sosmed d-flex gap-1 align-items-center">
										<img src={item.fb} alt="icon sosmed" />
										<img src={item.ig} alt="icon sosmed" />
										<img src={item.linked} alt="icon sosmed" />
									</div>
								</div>
							</div>
						</Col>
					))}

					<Col lg="6" sm="12">
						<div className="info-text-speakers">
							<img src={imgSyrcle} alt="Icon Syrcle" className='img-fluid' />
							<h3>Meet with <br />
								Graeter's Speakers</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit quis dui lacus. Aenean purus ut ac sit. Nullam habitant at tempus ut. Enim turpis sollicitudin magna nunc facilisis odo.Lorem ipsum dolor sit amet, consectetur adipiscing
								sit quis dui lacus. Aenean purus ut ac sit.</p>
							<button className="btn bg-transparent">View All Speaker</button>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default Speakers
