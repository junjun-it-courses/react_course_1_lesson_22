import React from "react";

class Nested extends React.PureComponent {
    render() {
        return <div>nested {Math.random()}</div>;
    }
}

export default Nested;