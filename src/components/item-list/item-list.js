import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import ErrorButton from "../error-button";
import Spinner from "../spinner/spinner";
import "./item-list.css";

export default class ItemList extends Component {
    state = {
        people: null,
    };

    swapi = new SwapiService();

    componentDidMount() {
        this.swapi.getAllPeople().then((people) => {
            this.setState({ people });
        });
    }

    render() {
        if (!this.state.people) {
            return <Spinner />;
        }

        return (
            <ErrorBoundry>
                <ul className="item-list list-group">
                    {this.state.people.map((person) => {
                        return (
                            <li
                                className="list-group-item"
                                onClick={() => {
                                    this.props.onClick(person.id);
                                }}
                            >
                                {person.name}
                            </li>
                        );
                    })}
                    <ErrorButton />
                </ul>
            </ErrorBoundry>
        );
    }
}
