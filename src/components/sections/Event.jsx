import React from 'react';
import { Container, Row } from "react-bootstrap";
import Card from "../UI/Card";

const Event = () => {
	return (
		<section className="sect-event">
			<Container>
				<div className="text-center title">
					<p>Why you should Join</p>
					<h3>The Designer’s Meetup Event</h3>
				</div>
				<Card />
			</Container>
		</section>
	)
}

export default Event
