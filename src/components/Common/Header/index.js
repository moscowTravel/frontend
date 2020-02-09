import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./index.scss";

class Header extends Component {

	onStartAgain() {
		window.location.href = "/";
	}

	render() {
		return (
			<header className="header">
				<div className="header-cover">
					<div className="header__logo">
						<div onClick={e => this.onStartAgain()}>
							<img src="/logo.png"/>
						</div>
					</div>
					<div className="header__menu">
						<div className="menu__item">
							<Link to="/map">Карта</Link>
						</div>
					</div>
					<div className="profile">
						<div className="sign-up">
							<a href='/'>Зарегистрироваться</a>
						</div>
					</div>
				</div>
			</header>)
	}
}

export default Header;