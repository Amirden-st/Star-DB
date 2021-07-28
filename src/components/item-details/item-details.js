import React, { Component, useEffect, useState } from "react";
import ErrorButton from "../error-button";
import Spinner from "../spinner/spinner";

import "./item-details.css";

const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    );
};

export { Record };

const ItemDetailsView = ({ item, image, records }) => {
    const { name } = item;
    return (
        <React.Fragment>
            <img className="person-image" src={image} />

            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {React.Children.map(records, (record) => {
                        // it's used for garanted mapping. Type of children doesn't matter now
                        // React elements are immutable so you have to copy them to add a new prop
                        return React.cloneElement(record, { item });
                    })}
                    <ErrorButton />
                </ul>
            </div>
        </React.Fragment>
    );
};

const ItemDetails = ({ itemId, getData, getImageUrl, children }) => {
    const [item, setItem] = useState(null);
    const [image, setImage] = useState(null);

    useEffect(() => {
        getData(itemId).then((item) => {
            setImage(getImageUrl(item));
            setItem(item);
        });
        
    }, [itemId]);

    const content = item ? (
        <ItemDetailsView
            records={children}
            item={item}
            image={image}
        />
    ) : (
        <Spinner />
    );

    return <div className="person-details card">{content}</div>;
};

export default ItemDetails;
