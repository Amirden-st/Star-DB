import React, { useState } from "react";
import Row from "../row";
import { PlanetDetails, PlanetList } from "../sw-components";

const PlanetsPage = () => {
    const [id, setId] = useState(1);

    return (
        <Row
            left={<PlanetList onClick={(id) => setId(id)} />}
            right={<PlanetDetails itemId={id} />}
        />
    );
};

export default PlanetsPage