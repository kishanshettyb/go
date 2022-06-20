import "./App.css";
import Products from "./components/Products";
import Categories from "./components/Categories";
import Banner from "./components/Banner";
import Menu from "./components/Menu";

function App() {
	return (
		<div>
			<Menu />
			<Banner />
			<div className="container mt-5 mb-5">
				<div className="row">
					<div className="col-md-3">
						<h4 className="fw-bold text-dark mb-4">Categories</h4>
						<Categories />
					</div>
					<div className="col-md-9 ">
						<div className="ps-5">
							<h4 className="fw-bold text-dark mb-4">Our Products</h4>
							<Products />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
