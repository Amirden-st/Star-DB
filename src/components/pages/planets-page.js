import React from "react";
import { withRouter } from "react-router-dom";
import Row from "../row";
import { PlanetDetails, PlanetList } from "../sw-components";

const PlanetsPage = ({ history, match }) => {
    const { id } = match.params;
    return (
        <Row
            left={<PlanetList onClick={(id) => history.push(id)} />}
            right={<PlanetDetails itemId={id} />}
        />
    );
};

export default withRouter(PlanetsPage);
