import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import Row from "../row";
import ErrorBoundry from "../error-boundry";

export default class PeoplePage extends Component {
    state = {
        selectedPerson: 3,
    };

    swapi = new SwapiService();

    setPerson = (id) => {
        this.setState({ selectedPerson: id });
    };

    render() {
        const itemList = (
            <ItemList
                onClick={this.setPerson}
                getData={this.swapi.getAllPeople}
            >
                {(i) => {
                    return `${i.name}  (${i.birthYear})`;
                }}
            </ItemList>
        );

        const personDetails = (
            <ErrorBoundry>
                <ItemDetails
                    itemId={this.state.selectedPerson}
                    getData={this.swapi.getPerson}
                    getImageUrl={this.swapi.getPersonImage}
                />
            </ErrorBoundry>
        );

        return <Row left={itemList} right={personDetails} />;
    }
}
