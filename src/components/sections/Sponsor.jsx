import { Container, Row, Col } from "react-bootstrap";
import { dataSponsor } from "../../assets/data/data";

const Sponsor = () => {
	return (
		<section className="sect-sponsor" id="sponsors">
			<Container>
				<div className="title text-center">
					<h3>Our Meetup Sponsor</h3>
				</div>
				<Row>
					{dataSponsor.map((item, index) => (
						<Col lg="3" md="4" sm="3" key={index} className="" >
							<div className="img-logo text-center" >
								<img src={item.logo} alt="" className="img-fluid" />
							</div>
						</Col>
					))}
				</Row>
				<button className="btn bg-transparent mx-auto d-flex justify-content-center">Became a Sponsor</button>
			</Container>
		</section>
	)
}

export default Sponsor
