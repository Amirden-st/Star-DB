import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
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
        if (!this.state.people ) {
            return <Spinner />;
        }

        return (
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
            </ul>
        );
    }
}
