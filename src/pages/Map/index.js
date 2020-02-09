import React, { Component } from "react";
import { YMaps, Map, Placemark, Clusterer } from 'react-yandex-maps';

import Header from "../../components/Common/Header/index";
import MapSidebar from '../../components/Map/Sidebar/index';

import "./index.scss";
import withRedux from './withRedux';

class BusinessPlanPage extends Component {

	state = {
		userPosition: []
	}

	// componentDidMount() {
	// 	navigator.geolocation.getCurrentPosition((position) => {
	// 		this.setState({
	// 			userPosition: [position.coords.latitude, position.coords.longitude]
	// 		})
	// 	});
	// }

	render() {

		return (
			<div className="map">
				<Header />
				<main className="main">
					<YMaps>
						<MapSidebar items={this.props.places} />
						<Map width={window.innerWidth - 5} height={window.innerHeight - 5}
							defaultState={{ center: [55.75, 37.57], zoom: 12 }}>

							<Clusterer
								options={{
									preset: 'islands#invertedVioletClusterIcons',
									groupByCoordinates: false,
								}}
							>{
									this.props.places.map(i => {
										return <Placemark key={i.id}
											onClick={(e) => {
												this.setState({})
											}}
											geometry={i.location}
											options={{
												preset: 'islands#circleIcon'
											}}
										/>
									})
								}</Clusterer>

							{
								this.state.userPosition ? (
									<Placemark geometry={this.state.userPosition} />)
									: ("")

							}
						</Map>
					</YMaps>
				</main>
			</div>)
	}
}

export default withRedux(BusinessPlanPage);
