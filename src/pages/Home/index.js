import React, { Component } from "react";

import Header from "../../components/Common/Header/index";
import WrapImage from "../../components/Home/WrapImage/index";
import WrapFooter from "../../components/Home/WrapFooter/index";
import SelectCategories from "../../components/Home/SelectCategories/index"

import "./index.scss";

class HomePage extends Component {

	render() {

		return (
			<div className="home">
				<Header />
				<main>
					<WrapImage />
					<SelectCategories />
					<WrapFooter />
				</main>
			</div>)
	}
}

export default HomePage;
