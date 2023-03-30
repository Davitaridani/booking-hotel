import { Container, Row, Col } from "react-bootstrap"
import Cta from "./Cta"
import { iconFooter, footerLinks } from "../../assets/data/data";
// import { footerLinks } from "../../assets/data/data";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

import React, { useState } from "react";
const Footer = () => {

	const [state, setstate] = useState(footerLinks)
	// console.log(state);

	return (
		<footer className="footer">
			<Cta />
			<Container>
				<Row>
					<Col lg="6">
						<div className="title" >
							<img src={logo} alt="" />
							<p>We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
						</div>
						<div className="icon d-flex align-items-center" >
							{iconFooter.map(item => (
								<img src={item.icon} alt="" className="" key={item.id} />
							))}
						</div>
					</Col>

					{footerLinks.map((item, index) => (
						<Col lg="2" className="item-link">
							<div className="title" key={index}>
								<h3>{item.title}</h3>
								<ul>
									{/* {
										footerLinks.links.map((itemLink, index) => (
											<li key={index}>
												<Link to="" >{itemLink.name}</Link>
											</li>
										))
									} */}
								</ul>
							</div>
						</Col>
					))
					}
				</Row>
				{/* <hr /> */}
				<div className="text-copyright text-center">
					<p>Copyright © Website By Ahmat Davit 2023. All rights reserved.</p>
				</div>
			</Container>
		</footer >
	)
}

export default Footer
