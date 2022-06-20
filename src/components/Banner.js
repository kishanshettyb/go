import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../src/App.css";

function Banner() {
	return (
		<Carousel id="myCarousel carousel slide  carousel-fade">
			<Carousel.Item>
				<img
					className="d-block w-100   h-100"
					src="img/banner/banner-5-dark.jpeg"
					alt="First slide"
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100  h-100"
					src="img/banner/banner-4-dark.jpg"
					alt="Second slide"
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100  h-100"
					src="img/banner/banner-3-dark.jpeg"
					alt="Third slide"
				/>
			</Carousel.Item>
		</Carousel>
	);
}

export default Banner;
