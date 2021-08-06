import React, { useEffect, useState } from "react";
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
            <img className="person-image" src={image} alt="Item" />

            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {React.Children.map(records, (record) => {
                        return React.cloneElement(record, { item });
                    })}
                </ul>
            </div>
        </React.Fragment>
    );
};

const ItemDetails = ({ itemId, getData, getImageUrl, children }) => {
    const [item, setItem] = useState(null);
    const [image, setImage] = useState(null);

    useEffect(() => {
        if (itemId) {
            getData(itemId).then((item) => {
                setImage(getImageUrl(item));
                setItem(item);
            });
        }
    }, [itemId]);

    const content = item ? (
        <ItemDetailsView records={children} item={item} image={image} />
    ) : (
        <Spinner />
    );
    
    

    return <div className="person-details card">{itemId ? content:<p>Select an item</p>}</div>;
};

export default ItemDetails;
