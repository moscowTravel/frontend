import React, { Component } from "react";
import { YMaps, Map, Placemark, Clusterer } from 'react-yandex-maps';

import Header from "../../components/Common/Header/index";
import MapSidebar from '../../components/Map/Sidebar/index';

import "./index.scss";
import withRedux from './withRedux';

class BusinessPlanPage extends Component {

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
											geometry={i.location}
											options={{
												preset: 'islands#circleIcon'
											}}
										/>
									})
								}</Clusterer>

						</Map>
					</YMaps>
				</main>
			</div>)
	}
}

export default withRedux(BusinessPlanPage);
