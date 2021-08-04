import React from "react";
import { withRouter } from "react-router";
import { StarshipList } from "../sw-components";

const StarshipsPage = ({ history }) => {
    return <StarshipList onClick={(id) => history.push(id)} />;
};  

export default withRouter(StarshipsPage);
