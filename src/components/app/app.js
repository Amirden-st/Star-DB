import React from "react";

import {
    SwapiServiceProvider,
    SwapiServiceConsumer,
} from "../swapi-service-context";

import Header from "../header";
import RandomPlanet from "../random-planet";
import SwapiService from "../../services/swapi-service";
import PeoplePage from "../people-page";
import DummySwapiService from "../../services/dummy-swapi-service";

import ErrorBoundry from "../error-boundry";
import Row from "../row";
import ItemDetails, { Record } from "../item-details/item-details";
import {
    PersonList,
    PlanetList,
    StarshipList,
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
} from "../sw-components";

import "./app.css";

const App = () => {
    const swapi = new SwapiService();

    return (
        <ErrorBoundry>
            <SwapiServiceProvider value={swapi}>
                <div className="stardb-app">
                    <Header />
                    <RandomPlanet />
                    <PersonDetails itemId="3" />
                    <PersonList />
                    <PlanetList />
                    <StarshipList />
                </div>
            </SwapiServiceProvider>
        </ErrorBoundry>
    );
};

export default App;
