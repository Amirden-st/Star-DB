import React from "react";

const ItemList = ({ data, onClick, children }) => {
    const items = data.map((item) => {
        const { id } = item;
        const label = children(item);
        return (
            <li
                className="list-group-item"
                key={id}
                onClick={() => {
                    onClick(id);
                }}
            >
                {label}
            </li>
        );
    });

    return <ul className="item-list list-group">{items}</ul>;
};

export default ItemList;
