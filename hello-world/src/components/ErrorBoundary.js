import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  // To change the state whenever error occurs
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  // To log the errors
  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong....</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
