import React from "react";
import { Jumbotron } from "./jumbotron.js";
import Navbar from "./navbar.js";
import { MyFooter } from "./footer.js";
import { Card } from "./card.js";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<div className="row-cols-8 mb-2">
					<Jumbotron />
				</div>

				<div class="container-fluid">
					<div class="row row-cols-4 mt-2">
						<div class="col-lg-3 col-md-6 col-sm-12"><Card /></div>
						<div class="col-lg-3 col-md-6 col-sm-12"><Card /></div>
						<div class="col-lg-3 col-md-6 col-sm-12"><Card /></div>
						<div class="col-lg-3 col-md-6 col-sm-12"><Card /></div>
					</div>
				</div>

			</div>
			<MyFooter />
		</>

	);
};

export default Home;
