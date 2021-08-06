import React, { Component } from "react";
import ErrorIndicator from "../error-indicator";


export default class ErrorBoundry extends Component {
    state = {
        hasError: false,
    };
    componentDidCatch(error, info) {
        // now the component is error boundry (граница)
        this.setState({ hasError: true });
    }
    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />;
        }
        return this.props.children;
    }
}