import React, { Component } from "react";
import Spinner from "../spinner/spinner";
import "./item-list.css";

class ItemList extends Component {
    renderItems(arr) {
        return arr.map((item) => {
            const { id } = item;
            const label = this.props.children(item);
            return (
                <li
                    className="list-group-item"
                    key={id}
                    onClick={() => {
                        this.props.onClick(id);
                    }}
                >
                    {label}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="item-list list-group">
                {this.renderItems(this.props.data)}
            </ul>
        );
    }
}

const withData = (View) => {
    return class extends Component {
        state = {
            data: null,
        };

        componentDidMount() {
            this.props.getData().then((data) => {
                this.setState({ data });
            });
        }
        render() {
            if (!this.state.data) {
                return <Spinner />;
            }
            return <View {...this.props} data={this.state.data} />;
        }
    };
};

export default withData(ItemList);
