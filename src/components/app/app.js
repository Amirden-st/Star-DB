import React, { useState } from "react";

import { SwapiServiceProvider } from "../swapi-service-context";

import Header from "../header";
import RandomPlanet from "../random-planet";
import SwapiService from "../../services/swapi-service";

import ErrorBoundry from "../error-boundry";
import {
    LoginPage,
    PeoplePage,
    PlanetsPage,
    SecretPage,
    StarshipsPage,
} from "../pages";

import "./app.css";

import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import { StarshipDetails } from "../sw-components";

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const swapi = new SwapiService();

    return (
        <ErrorBoundry>
            <SwapiServiceProvider value={swapi}>
                <Router>
                    <div className="stardb-app">
                        <Header />
                        <Switch>
                            <Route path="/" exact>
                                <React.Fragment>
                                    <RandomPlanet />
                                    <h2>Welcome to StarDB</h2>
                                </React.Fragment>
                            </Route>
                            <Route path="/people/:id?" component={PeoplePage} />
                            <Route
                                path="/people"
                                render={() => <h2>People</h2>}
                            />
                            <Route
                                path="/planets/:id?"
                                component={PlanetsPage}
                            />
                            <Route
                                path="/starships"
                                component={StarshipsPage}
                                exact
                            />
                            <Route
                                path="/starships/:id"
                                render={({ match }) => {
                                    const { id } = match.params;
                                    return <StarshipDetails itemId={id} />;
                                }}
                            />
                            <Route
                                path="/secret"
                                render={() => {
                                    return <SecretPage isLoggedIn={loggedIn} />;
                                }}
                            />
                            <Route
                                path="/login"
                                render={() => {
                                    return (
                                        <LoginPage
                                            isLoggedIn={loggedIn}
                                            onLogin={() => setLoggedIn(true)}
                                        />
                                    );
                                }}
                            />
                            <Route render={() => <h2>404 Page Not Found</h2>} />
                        </Switch>
                    </div>
                </Router>
            </SwapiServiceProvider>
        </ErrorBoundry>
    );
};

export default App;
