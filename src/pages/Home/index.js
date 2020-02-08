import React, { Component } from "react";

import WrapImage from "../../components/Home/WrapImage/index";
import WrapFooter from "../../components/Home/WrapFooter/index";
import SelectCategories from "../../components/Home/SelectCategories/index"

import "./index.scss";

class HomePage extends Component {

	render() {

		return (
			<main className="home">
				<WrapImage />
				<SelectCategories />
				<WrapFooter />
			</main>)
	}
}

export default HomePage;
