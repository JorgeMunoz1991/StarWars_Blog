import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import injectContext from "./store/appContext";
import { Home } from "./views/home";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Page } from "./views/Page.js";
import { Like } from "./views/Like.js";
import { Single } from "./views/single.js";




const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div className="bg-dark">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/people" element={<Page endpoint={"people"} Title={"Characters"} />} />
						<Route path="/vehicles" element={<Page endpoint={"starships"} Title={"Vehicles"} />} />
						<Route path="/planets" element={<Page endpoint={"planets"} Title={"Planets"} />} />
						<Route path="/liked" element={<Like />} />
						<Route path="/single" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
