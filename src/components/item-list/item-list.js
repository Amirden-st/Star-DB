import React from "react";
import PropTypes from "prop-types";

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
                                
ItemList.defaultProps = {
    onClick: () => {},
};

ItemList.propTypes = {
    onClick: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.func.isRequired,
};

export default ItemList;
