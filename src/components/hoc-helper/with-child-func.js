import React from "react";
const withChildFunc = (func) => (Wrapped) => {
    return (props) => {
        return <Wrapped {...props}>{func}</Wrapped>;
    };
};

export default withChildFunc;
