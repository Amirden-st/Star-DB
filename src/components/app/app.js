import React from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import SwapiService from "../../services/swapi-service";
import PeoplePage from "../people-page";

import "./app.css";
import ErrorBoundry from "../error-boundry";
import Row from "../row";
import ItemDetails, { Record } from "../item-details/item-details";

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
            return <h1>Error occured</h1>;
        }

        const personDetails = (
            <ItemDetails
                itemId={11}
                getData={this.swapi.getPerson}
                getImageUrl={this.swapi.getPersonImage}
            >
                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye Color" />
            </ItemDetails>
        );
        const itemList = <PeoplePage />;
        return (
            <ErrorBoundry>
                <div>
                    <Header />
                    <Row left={personDetails} right={itemList} />
                </div>
            </ErrorBoundry>
        );
    }
}

export default App;
