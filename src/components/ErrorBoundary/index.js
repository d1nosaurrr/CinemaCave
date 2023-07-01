import React, {Component} from 'react';

import Error from './Error';

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
            return <Error />;
        }
        return this.props.children;
    }
}

