import React from "react";
import { withSwapiService } from "../hoc-helper";
import ItemDetails, { Record } from "../item-details";

const PersonDetails = ({ itemId, getData, getImageUrl }) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getData}
            getImageUrl={getImageUrl}
        >
            <Record field="gender" label="Gender" />
            <Record field="eyeColor" label="Eye Color" />
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage,
    };
};

export default withSwapiService(mapMethodsToProps)(PersonDetails);
