import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import "./index.scss";

class SelectCategories extends Component {
    state = {
        museum: false,
        theater: false,
        culturalHeritage: false,
        viewingPlatforms: false,
        exhibitionHalls: false,
        botanicalGarden: false
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
                                    <FontAwesomeIcon icon={faCheck} />
                            </button>
                        </div>
                    </div>
                    <div className="grid__item">
                        <div className="image"
                            style={{
                                backgroundImage: `url('/home/categories/museum.jpg')`
                            }}></div>
                        <div className="title">
                            <h3>Театры</h3>
                        </div>
                        <div className="status">
                            <button 
                                onClick={() => {
                                    this.changeCategoryStatus("theater")
                                }}
                                className={this.state.theater ? "active": ""}>
                                    <FontAwesomeIcon icon={faCheck} />
                            </button>
                        </div>
                    </div>
                    <div className="grid__item">
                        <div className="image"
                            style={{
                                backgroundImage: `url('/home/categories/museum.jpg')`
                            }}></div>
                        <div className="title">
                            <h3>Культурное наследие</h3>
                        </div>
                        <div className="status">
                            <button 
                                onClick={() => {
                                    this.changeCategoryStatus("culturalHeritage")
                                }}
                                className={this.state.culturalHeritage ? "active": ""}>
                                    <FontAwesomeIcon icon={faCheck} />
                            </button>
                        </div>
                    </div>
                    <div className="grid__item">
                        <div className="image"
                            style={{
                                backgroundImage: `url('/home/categories/museum.jpg')`
                            }}></div>
                        <div className="title">
                            <h3>Смотровые площадки</h3>
                        </div>
                        <div className="status">
                            <button 
                                onClick={() => {
                                    this.changeCategoryStatus("viewingPlatforms")
                                }}
                                className={this.state.viewingPlatforms ? "active": ""}>
                                    <FontAwesomeIcon icon={faCheck} />
                            </button>
                        </div>
                    </div>
                    <div className="grid__item">
                        <div className="image"
                            style={{
                                backgroundImage: `url('/home/categories/museum.jpg')`
                            }}></div>
                        <div className="title">
                            <h3>Выставочные залы</h3>
                        </div>
                        <div className="status">
                            <button 
                                onClick={() => {
                                    this.changeCategoryStatus("exhibitionHalls")
                                }}
                                className={this.state.exhibitionHalls ? "active": ""}>
                                    <FontAwesomeIcon icon={faCheck} />
                            </button>
                        </div>
                    </div>
                    <div className="grid__item">
                        <div className="image"
                            style={{
                                backgroundImage: `url('/home/categories/museum.jpg')`
                            }}></div>
                        <div className="title">
                            <h3>Ботанические сады</h3>
                        </div>
                        <div className="status">
                            <button 
                                onClick={() => {
                                    this.changeCategoryStatus("botanicalGarden")
                                }}
                                className={this.state.botanicalGarden ? "active": ""}>
                                    <FontAwesomeIcon icon={faCheck} />
                            </button>
                        </div>
                    </div>                    
                </div>
                <div className="submit">
                    <button>Продолжить</button>
                </div>
            </section>)
    }
}

export default SelectCategories;