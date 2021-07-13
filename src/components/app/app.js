import React from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetails from "../person-details";

import SwapiService from "../../services/swapi-service";

import "./app.css";

class App extends React.Component {
    state = {
        personId: 3,
    };

    swapi = new SwapiService();

    componentDidMount() {
        this.setPerson(1);
    }

    setPerson = (id) => {
        this.setState({ personId: id });
    };

    render() {
        return (
            <div>
                <Header />
                <RandomPlanet />
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onClick={this.setPerson} />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.personId} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
