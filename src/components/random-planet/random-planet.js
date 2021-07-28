import React, { Component, useState, useEffect } from "react";
import "./random-planet.css";
import Spinner from "../spinner/spinner";
import ErrorButton from "../error-button";
import { withSwapiService } from "../hoc-helper";

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
                <ErrorButton />
            </div>
        </React.Fragment>
    );
};


const RandomPlanet = ({ swapiService: swapi }) => {
    const [planet, setPlanet] = useState(null);
    const [loading, setLoading] = useState(true);

    const updatePlanet = () => {
        const randomId = Math.floor(Math.random() * 20) + 1;
        setLoading(true);
        swapi.getPlanet(randomId).then((planet) => {
            setPlanet(planet);
            setLoading(false);
        });
    };

    useEffect(() => {
        updatePlanet();
        const intervalId = setInterval(() => {
            updatePlanet();
        }, 8000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const content = loading ? (
        <Spinner />
    ) : (
        <RandomPlanetView planet={planet} />
    );

    return <div className="random-planet jumbotron rounded">{content}</div>;
};

export default withSwapiService(RandomPlanet);
