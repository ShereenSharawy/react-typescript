import React, {ErrorInfo} from 'react';

export default class ErrorBoundary extends React.Component<{children: React.ReactNode}, { hasError: boolean }> {
    constructor(props: {children: React.ReactNode}) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error: Error) {    // Update state so the next render will show the fallback UI.
        return {hasError: true};
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {    // You can also log the error to an error reporting service
        // logErrorToMyService(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {    // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}