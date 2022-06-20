import React from "react";
import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import Woocommerce from "./woocomerce";
import ListGroup from "react-bootstrap/ListGroup";
function Categories() {
	const [categories, setCategories] = useState(0);

	useEffect(() => {
		Woocommerce.getCategories().then((res) => {
			setCategories(res.data);
		});
	}, []);

	return (
		<div className="shadow rounded">
			<ListGroup>
				{Object.values(categories).map((item, itemIndex) => {
					return (
						<ListGroup.Item key={item.id}>
							<a href={item.slug}>{item.name}</a>
						</ListGroup.Item>
					);
				})}
			</ListGroup>
		</div>
	);
}

export default Categories;
