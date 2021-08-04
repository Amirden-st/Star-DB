import React from "react";
import Row from "../row";
import { PersonDetails, PersonList } from "../sw-components";
import { withRouter } from "react-router";

const PeoplePage = ({ match, history }) => {
    const { id } = match.params;
    
    return (
        <Row
            left={<PersonList onClick={(id) => history.push(id)} />}
            right={<PersonDetails itemId={id} />}
        />
    );
};

export default withRouter(PeoplePage);
