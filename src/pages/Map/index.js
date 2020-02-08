import React, { Component } from "react";
import { YMaps, Map, Placemark } from 'react-yandex-maps';

import MapSidebar from '../../components/Map/Sidebar/index';

// import mockItems from '../../../public/poi.json';
import "./index.scss";

class BusinessPlanPage extends Component {
  state = {
    items: []
  }

  async componentDidMount() {
    const data = await fetch('/poi.json');
    const jsonData = await data.json();

    this.setState({
      items: jsonData.items.map(i => {
        return {
          ...i,
          location: i.location.reverse()
        }
      })
    });
  }

  render() {

    return (
      <main className="map main">
        <YMaps>
          <MapSidebar items={this.state.items} />
          <Map width={window.innerWidth - 5} height={window.innerHeight - 5}
            defaultState={{ center: [55.75, 37.57], zoom: 12 }}>
            {
              this.state.items.map(i => <Placemark key={i.id} geometry={i.location} />)
            }
          </Map>
        </YMaps>
      </main>)
  }
}

export default BusinessPlanPage;
