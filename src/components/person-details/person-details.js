import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";

import "./person-details.css";

const PersonDetailsView = ({ person }) => {
    const { id, name, gender, birthYear, eyeColor } = person;
    return (
        <React.Fragment>
            <img
                className="person-image"
                src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
            />

            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Birth Year</span>
                        <span>{birthYear}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Eye Color</span>
                        <span>{eyeColor}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};

export default class PersonDetails extends Component {
    state = {
        person: null,
    };

    swapi = new SwapiService();

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.setState({ person: null });
            this.updatePerson();
        }
    }

    updatePerson() {
        this.swapi.getPerson(this.props.personId).then((person) => {
            this.setState({ person });
        });
    }

    render() {
        const person = this.state.person;
        const content = person ? (
            <PersonDetailsView person={person} />
        ) : (
            <Spinner />
        );

        return <div className="person-details card">{content}</div>;
    }
}
