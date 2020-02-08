import React, { Component } from "react";

import "./index.scss";

class SelectCategories extends Component {
    state = {
        museum: false,
        theater: false,
        culturalHeritage: false,
        viewingPlatforms: false,
        exhibitionHalls: false
    }

    changeCategoryStatus(prop) {
        this.setState({
            [prop]: !this.state[prop]
        })
    }

    render() {
        return (
            <section className="categories container">
                <div className="title">
                    <h2>Выберите предпочтения</h2>
                </div>
                <div className="grid">
                    <div className="grid__item">
                        <div className="image"
                            style={{
                                backgroundImage: `url('/home/categories/museum.jpg')`
                            }}></div>
                        <div className="title">
                            <h3>Музеи</h3>
                        </div>
                        <div className="status">
                            <button 
                                onClick={() => {
                                    this.changeCategoryStatus("museum")
                                }}
                                className={this.state.museum ? "active": ""}>
                                <img src="/home/accept.svg" alt="accept" />
                            </button>
                        </div>
                    </div>
                    <div className="grid__item">
                        <div className="image"
                            style={{
                                backgroundImage: `url('/home/categories/museum.jpg')`
                            }}></div>
                        <div className="title">
                            <h3>Музеи</h3>
                        </div>
                        <div className="status">
                            <button 
                                onClick={() => {
                                    this.changeCategoryStatus("museum")
                                }}
                                className={this.state.museum ? "active": ""}>
                                <img src="/home/accept.svg" alt="accept" />
                            </button>
                        </div>
                    </div>
                    <div className="grid__item">
                        <div className="image"
                            style={{
                                backgroundImage: `url('/home/categories/museum.jpg')`
                            }}></div>
                        <div className="title">
                            <h3>Музеи</h3>
                        </div>
                        <div className="status">
                            <button 
                                onClick={() => {
                                    this.changeCategoryStatus("museum")
                                }}
                                className={this.state.museum ? "active": ""}>
                                <img src="/home/accept.svg" alt="accept" />
                            </button>
                        </div>
                    </div>
                    <div className="grid__item">
                        <div className="image"
                            style={{
                                backgroundImage: `url('/home/categories/museum.jpg')`
                            }}></div>
                        <div className="title">
                            <h3>Музеи</h3>
                        </div>
                        <div className="status">
                            <button 
                                onClick={() => {
                                    this.changeCategoryStatus("museum")
                                }}
                                className={this.state.museum ? "active": ""}>
                                <img src="/home/accept.svg" alt="accept" />
                            </button>
                        </div>
                    </div>
                    <div className="grid__item">
                        <div className="image"
                            style={{
                                backgroundImage: `url('/home/categories/museum.jpg')`
                            }}></div>
                        <div className="title">
                            <h3>Музеи</h3>
                        </div>
                        <div className="status">
                            <button 
                                onClick={() => {
                                    this.changeCategoryStatus("museum")
                                }}
                                className={this.state.museum ? "active": ""}>
                                <img src="/home/accept.svg" alt="accept" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>)
    }
}

export default SelectCategories;