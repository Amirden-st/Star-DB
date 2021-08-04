import React, { useState, useEffect } from "react";
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";

const withData = (View) => {
    return (props) => {
        const [data, setData] = useState(null);
        const [error, setError] = useState(false);
        
        useEffect(() => {
            props.getData()
                .then((data) => {
                    setData(data);
                })
                .catch((e) => {
                    setError(true);
                    console.log(e);
                });
        }, []);

        if (error) {
            return <ErrorIndicator />;
        } else if (!data) {
            return <Spinner />;
        }
        return <View {...props} data={data} />;
    };
};

export default withData;
