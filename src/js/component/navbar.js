import React from "react";
import { Link } from "react-router-dom";
import StarWars_Logo from "../../img/StarWars_Logo.png"

export const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-light bg-light pb-3">
				<Link to="/" className="ms-5">
					<img src={StarWars_Logo} />
				</Link>
				<div className="btn-group me-5">
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						<i className="fa-solid fa-bars"></i>
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						<Link to="/planets" className="dropdown-item">Planets</Link>
						<Link to="/people" className="dropdown-item">People</Link>
						<Link to="/vehicle" className="dropdown-item">Vehicles</Link>
						<Link to="/liked" className="dropdown-item">Liked</Link>
					</ul>
				</div>
			</nav>
		</>
	);
};
