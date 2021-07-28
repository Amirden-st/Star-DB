import React, { Component } from "react";
import "./random-planet.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorBoundry from "../error-boundry";
import ErrorButton from "../error-button";

const RandomPlanetView = (props) => {
    const {
        id = "-",
        name = "-",
        population = "-",
        rotationPeriod = "-",
        diameter = "-",
    } = props.planet;

    return (
        <React.Fragment>
            <img
                className="planet-image"
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
            />
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};

class RandomPlanet extends React.Component {
    swapi = new SwapiService();

    state = {
        planet: {},
        load: true,
    };

    componentDidMount() {
        this.componentUpdating = setInterval(() => {
            this.updatePlanet();
        }, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.componentUpdating);
    }

    updatePlanet = () => {
        const planet_id = Math.floor(Math.random() * 24) + 1;

        this.swapi.getPlanet(planet_id).then((data) => {
            this.setState({
                planet: data,
                load: false,
            });
        });
    };

    render = () => {
        const content = this.state.load ? (
            <Spinner />
        ) : (
            <RandomPlanetView planet={this.state.planet} />
        );

        return (
            <ErrorBoundry>
                <div className="random-planet jumbotron rounded">
                    {content}
                    <ErrorButton />
                </div>
            </ErrorBoundry>
        );
    };
}

export default RandomPlanet;
