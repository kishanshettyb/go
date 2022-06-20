import React from "react";
import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import Woocommerce from "./woocomerce";
import Carousel from "react-bootstrap/Carousel";

function Products() {
	const [products, setProducts] = useState(0);
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	useEffect(() => {
		Woocommerce.getProducts().then((res) => {
			setProducts(res.data);
		});
	}, []);

	return (
		<div className="row">
			{Object.values(products).map((item, itemIndex) => {
				console.log();
				return (
					<div className="col-md-6">
						<div className="product-card m-2 shadow-sm">
							<img key={item.images[0].id} src={item.images[0].src} />
							<h5>
								<a href="product-details?product_id=">{item.name}</a>
							</h5>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Products;
