import React from "react";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import Row from "../row";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import ErrorButton from "../error-button";

class PeoplePage extends React.Component {
    swapi = new SwapiService();

    state = {
        personId: 1,
    };

    selectPerson = (id) => {
        this.setState({
            personId: id,
        });
    };

    render() {
        const leftElement = (
            <ItemList
                getData={this.swapi.getAllPeople}
                selectPerson={this.selectPerson}
            >
                {(item) => `${item.name} (${item.gender})`}
            </ItemList>
        );
        const rightElement = (
            <PersonDetails
                personId={this.state.personId}
                getData={this.swapi.getPerson}
            />
        );

        return (
            <ErrorBoundry>
                <Row left={leftElement} right={rightElement} />
            </ErrorBoundry>
        );
    }
}

export default PeoplePage;
