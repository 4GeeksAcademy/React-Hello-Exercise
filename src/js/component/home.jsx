import React from "react";
import { Jumbotron } from "./jumbotron.js";
import Navbar from "./navbar.js";
import { MyFooter } from "./footer.js";
import { Card } from "./card.js";

//create your first component
const Home = () => {
	return (
		<>
		<div className="container-fluid px-0">		
			<Navbar />
		</div>
		<div className="container">
			<div className="row" style={{margin: "0", padding: "0"}}>			
					<Jumbotron />	
			</div>			
			<div class="row mt-2"style={{margin: "0", padding: "0"}}>	
					<div class="col-lg-3 col-md-6 col-sm-12"><Card /></div>
					<div class="col-lg-3 col-md-6 col-sm-12"><Card /></div>
					<div class="col-lg-3 col-md-6 col-sm-12"><Card /></div>
					<div class="col-lg-3 col-md-6 col-sm-12"><Card /></div>
			</div>	
		</div>
		<div className="container-fluid px-0">
			<MyFooter />
		</div>
			</>
	

	);
};

export default Home;
