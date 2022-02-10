import React from "react";

class ComponentCB extends React.PureComponent {
    render() {
        return <MyInput
            onChange={e => this.props.update(e.target.value)} />;
    }
}

export default ComponentCB;