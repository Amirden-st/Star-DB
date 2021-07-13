import React, { Component } from "react";
import "./random-planet.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";

const RandomPlanetView = ({ planet }) => {
    const {
        id = "-",
        name = "-",
        population = "-",
        rotationPeriod = "-",
        diameter = "-",
    } = planet;
    
    
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

class RandomPlanet extends Component {
    state = {
        planet: {},
        loading: true,
    };

    swapi = new SwapiService();

    updatePlanet = () => {
        const randomId = Math.floor(Math.random() * 20) + 1;
        this.swapi.getPlanet(randomId).then((data) => {
            this.setState({
                planet: data,
                loading: false,
            });
        });
    };

    componentDidMount() {
        this.updatePlanet();
        this.updateInrervalId = setInterval(() => {
            this.updatePlanet();
        }, 10000);
    }

    componentWillUnmount() {
        clearInterval(this.updateInrervalId);
    }

    render = () => {
        const content = this.state.loading ? (
            <Spinner />
        ) : (
            <RandomPlanetView planet={this.state.planet} />
        );

        return <div className="random-planet jumbotron rounded">{content}</div>;
    };
}

export default RandomPlanet;
