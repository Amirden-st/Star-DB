import React from "react";
import ItemList from "../item-list";
import { withData, withSwapiService, withChildFunc, compose } from "../hoc-helper";
import SwapiService from "../../services/swapi-service";

const { getAllPeople, getAllPlanets, getAllStarships } = new SwapiService();

const renderName = ({ name }) => {
    return <span>{name}</span>;
};

const renderModelAndName = ({ model, name }) => {
    return (
        <span>
            {name} ({model})
        </span>
    );
};

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople,
    };
};

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets,
    };
};

const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships,
    };
};

const PersonList = compose(
    withSwapiService(mapPersonMethodsToProps),
    withData,
    withChildFunc(renderName)
)(ItemList);
const PlanetList = compose(
    withSwapiService(mapPlanetMethodsToProps),
    withData,
    withChildFunc(renderName)
)(ItemList);
const StarshipList = compose(
    withSwapiService(mapStarshipMethodsToProps),
    withData,
    withChildFunc(renderModelAndName)
)(ItemList);

export { PersonList, PlanetList, StarshipList };
