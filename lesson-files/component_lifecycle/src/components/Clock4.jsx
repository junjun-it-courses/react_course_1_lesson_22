import React from "react";

class Clock4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.setState({ date: new Date() }), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        const { date } = this.state;
        return (
            <div>{date.toLocaleTimeString()}</div>
        );
    }
}

export default Clock4;