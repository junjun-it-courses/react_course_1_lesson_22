import React from "react";

class Clock3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        // Сохраняется идентификатор таймера
        this.timerId = setInterval(() => this.setState({ date: new Date() }), 1000);
    }

    render() {
        const { date } = this.state;
        return (
            <div>{date.toLocaleTimeString()}</div>
        );
    }
}

export default Clock3;