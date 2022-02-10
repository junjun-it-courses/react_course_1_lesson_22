import React from "react";
import Nested from "./Nested";

class AppComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { number: Math.random() };
    }

    handleClick = () => {
        this.setState({ number: Math.random() });
    };

    render() {
        return <div>
            <button onClick={this.handleClick}>Click</button>
            <div>app {this.state.number}</div>
            <Nested />
        </div>;
    }
}

export default AppComponent;