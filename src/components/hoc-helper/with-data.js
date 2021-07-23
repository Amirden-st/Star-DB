import React, { Component } from "react";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const withData = (View, getData) => {
    return class extends Component {
        state = {
            data: null,
        };

        componentDidMount() {
            getData()
                .then((data) => {
                    this.setState({ data });
                })
                .catch(this.setState({ hasError: true }));
        }
        render() {
            if (!this.state.data) {
                return <Spinner />;
            }
            return <View {...this.props} data={this.state.data} />;
        }
    };  
};

export default withData;
