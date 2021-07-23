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
import ErrorIndicator from "../error-indicator";

class App extends React.Component {
    state = {
        personId: 3,
        hasError: false,
    };

    swapi = new SwapiService();

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />;
        }

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapi}>
                    <div className="stardb-app">
                        <Header />
                        <PersonDetails itemId="1" />
                        <PersonList />
                        <PlanetList />
                        <StarshipList />
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}

export default App;
