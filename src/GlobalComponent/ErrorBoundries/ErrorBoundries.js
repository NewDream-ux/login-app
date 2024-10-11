import React from "react";
class ErrorBoundries extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info){
       this.setState({hasError:true});
       console.log("jhhhjhjjhj", error, info);
    }
    render() {
        return (
            this.props.children
        )
    }
}

export default ErrorBoundries;