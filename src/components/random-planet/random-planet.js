import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

import "./random-planet.css";
import Spinner from "../spinner/spinner";
import ErrorButton from "../error-button";
import { withSwapiService } from "../hoc-helper";
import ErrorIndicator from "../error-indicator";
import { PlanetDetails } from "../sw-components";

const RandomPlanetView = ({ data, img }) => {
    const {
        id = "-",
        name = "-",
        population = "-",
        rotationPeriod = "-",
        diameter = "-",
    } = data;

    return (
        <React.Fragment>
            <img className="planet-image" src={img} alt="Planet" />
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

// const RandomPlanet = ({ getData, getImageUrl, updateInterval }) => {
//     const [planet, setPlanet] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(false);

//     const updatePlanet = () => {
//         const randomId = Math.floor(Math.random() * 20) + 1;
//         setLoading(true);
//         getData(randomId)
//             .then((planet) => {
//                 setPlanet(planet);
//                 setLoading(false);
//             })
//             .catch((e) => {
//                 setError(true);
//             });
//     };

//     useEffect(() => {
//         updatePlanet();
//         const intervalId = setInterval(() => {
//             updatePlanet();
//         }, updateInterval);
//         return () => {
//             clearInterval(intervalId);
//         };
//     }, []);

//     let content = loading ? (
//         <Spinner />
//     ) : (
//         <RandomPlanetView data={planet} img={getImageUrl(planet)} />
//     );

//     content = error ? <ErrorIndicator /> : content;

//     return <div className="random-planet jumbotron rounded">{content}</div>;
// };

const RandomPlanet = (props) => {
    const [id, setId] = useState(1)
    useEffect(() => {
        const randomId = Math.floor(Math.random() * 20) + 1;
        const intervalId = setInterval(() => {
            setId(randomId);
        }, props.updateInterval);
        return () => {
            clearInterval(intervalId);
        };
    });
    return <PlanetDetails {...props} itemId={id} />;
};

const mapMethodsToProps = ({ getPlanet, getPlanetImage }) => {
    return {
        getData: getPlanet,
        getImageUrl: getPlanetImage,
    };
};

RandomPlanet.defaultProps = {
    updateInterval: 8000,
};

RandomPlanet.propTypes = {
    updateInterval: PropTypes.number,
};

export default RandomPlanet;
