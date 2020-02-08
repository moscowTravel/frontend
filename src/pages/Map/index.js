import React, { Component } from "react";
import { YMaps, Map, Placemark } from 'react-yandex-maps';

import MapSidebar from '../../components/Map/Sidebar/index';

import "./index.scss";
import withRedux from './withRedux';

class BusinessPlanPage extends Component {

  render() {

    return (
      <main className="map main">
        <YMaps>
          <MapSidebar items={this.props.places} />
          <Map width={window.innerWidth - 5} height={window.innerHeight - 5}
            defaultState={{ center: [55.75, 37.57], zoom: 12 }}>
            {
              this.props.places.map(i => <Placemark key={i.id} geometry={i.location} />)
            }
          </Map>
        </YMaps>
      </main>)
  }
}

export default withRedux(BusinessPlanPage);
