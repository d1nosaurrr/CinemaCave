import React, {Component} from 'react';

import PageNotFound from "../../pages/PageNotFound";

export default class ErrorBoundary extends Component {
    state = {
        hasError: false,
    };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(err) {
        console.error({ err });
    }

    render() {
        if (this.state.hasError === true) {
            return <PageNotFound />;
        }
        return this.props.children;
    }
}

