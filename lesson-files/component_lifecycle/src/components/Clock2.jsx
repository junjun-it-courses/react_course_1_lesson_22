import React from "react";

class Clock2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    render() {
        const { date } = this.state;
        return (
            <div>{date.toLocaleTimeString()}</div>
        );
    }
}

export default Clock2;