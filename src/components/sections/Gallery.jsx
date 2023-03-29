import { Container, Row, Col } from "react-bootstrap";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { images } from "../../assets/data/data";
import imgShape from "../../assets/img/shape-gallery.png";
import imgShape2 from "../../assets/img/shape2.png";

const Gallery = () => {

	return (
		<section className="sect-gallery">
			<Container fluid>

				<div className="title text-center">
					<img src={imgShape2} alt="" className="img-title-2" />

					<h3>Photo Gallery</h3>
					<img src={imgShape} alt="" className="img-title-1" />
				</div>
				<ResponsiveMasonry
					columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 5 }}>
					<Masonry gutter="12px" className="masonry">
						{
							images.map((item, index) => (
								<img src={item.src} key={index} alt="" />
							))
						}
					</Masonry>
				</ResponsiveMasonry>
			</Container>
		</section >
	)
}

export default Gallery
