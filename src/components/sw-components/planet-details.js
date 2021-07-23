import React from "react";
import { withSwapiService } from "../hoc-helper";
import ItemDetails, { Record } from "../item-details";

const PlanetDetails = ({ itemId, swapiService }) => {
    const { getPlanet, getPlanetImage } = swapiService;

    return (
        <ItemDetails
            itemId={itemId}
            getData={getPlanet}
            getImageUrl={getPlanetImage}
        >
            <Record field="population" label="Population" />
            <Record field="rotationPeriod" label="Rotation Period" />
            <Record field="diameter" label="Diameter" />
        </ItemDetails>
    );
};

export default withSwapiService(PlanetDetails);
