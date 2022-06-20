import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
function Menu() {
	return (
		<Navbar className="navbar navbar-desktop navbar-expand-lg bg-dark   shadow-lg fixed-top">
			<Container>
				<Navbar.Brand href="#home" className="navbar-brand">
					<img className="logo" src="img/logo/Go Service Logo Side Text.png" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse
					id="basic-navbar-nav"
					className="collapse navbar-collapse"
				>
					<Nav className="ms-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#link">About</Nav.Link>
						<Nav.Link href="#link">Categories</Nav.Link>
						<NavDropdown title="Products" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Products</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">
								Another action
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">
								Separated link
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href="#link">Contact</Nav.Link>
						<Nav.Link href="#link">Blog</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Menu;
