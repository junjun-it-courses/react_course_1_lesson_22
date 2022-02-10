import React from "react";

class Clock extends React.Component {
    render() {
        const currentTime = new Date();
        return (
            <div>{currentTime.toLocaleTimeString()}</div>
        );
    }
}

export default Clock;