import React from "react";
import ItemList from "../item-list";
import { withData } from "../hoc-helper";
import SwapiService from "../../services/swapi-service";

const { getAllPeople, getAllPlanets, getAllStarships } = new SwapiService();

const withChildFunc = (Wrapped, func) => {
    return (props) => {
        return <Wrapped {...props}>{func}</Wrapped>;
    };
};

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

const PersonList = withData(withChildFunc(ItemList, renderName), getAllPeople);
const PlanetList = withData(withChildFunc(ItemList, renderName), getAllPlanets);
const StarshipList = withData(
    withChildFunc(ItemList, renderModelAndName),
    getAllStarships
);

export { PersonList, PlanetList, StarshipList };
