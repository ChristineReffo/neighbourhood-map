import React, { Component } from "react";

class ErrorBoundary extends Component {

  state = {
    hasError: false
  }

  ComponentDidCatch(error, info) {
      window.alert("Ooops, something went wrong. Please try again")
      this.setState({ hasError: true });

    }

    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
      }
      return this.props.children;
    }
  }

export default ErrorBoundary
