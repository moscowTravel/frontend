import React, { Component } from "react";
import Scroll from "react-scrollbar";

import "./index.scss";

class SidebarMap extends Component {

    render() {
        return (
            <section className="sidebar">
                <div className="header"></div>
                <div className="main">
                    <Scroll
                    horizontal={false}>
                        <div className="list">
                            {
                                this.props.items.map(item => {
                                    return (
                                        <div key={item.id} className="list__item">
                                        <div className="image" style={{
                                                backgroundImage: item.img
                                            }}>
                                        </div>
                                        <div className="name">
                                            {item.name}
                                        </div>
                                        <div className="category">
                                            {item.category}
                                        </div>
                                    </div>
                                    )
                                })
                            }
                        </div>
                    </Scroll>
                </div>
            </section>)
    }
}

export default SidebarMap;