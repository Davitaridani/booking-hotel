import { Container } from "react-bootstrap";
import imgCta1 from "../../assets/img/img-cta1.png";
import imgCta2 from "../../assets/img/img-cta2.png";
import imgCta3 from "../../assets/img/img-cta3.png";

const Cta = () => {
	return (
		<section className="sect-cta">
			<Container>
				<div className="d-flex align-items-center justify-content-between cta">
					<div className="cta-3">

						<img src={imgCta3} alt="" />
					</div>
					<div className="text">
						<img src={imgCta1} alt="" className="img-fluid" />
						<p>Dont miss our future updates</p>
						<h3>Get Subscribed Today</h3>
					</div>
					<div className="btn-subscribe d-flex align-items-center">
						<img src={imgCta2} alt="" />
						<input type="email" className="form-control" placeholder="Enter your email" />
						<button className="">Subscribe</button>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default Cta
