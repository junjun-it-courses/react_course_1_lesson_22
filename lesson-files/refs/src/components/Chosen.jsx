import React from "react";
import $ from 'jquery';
// import chosen from 'chosen';


class Chosen extends React.Component {
    constructor(props) {
        super(props);
        this.selectRef = React.createRef();
    }
    componentDidMount() {
        $(this.selectRef.current).chosen();
    }

    render() {
        return <select ref={this.selectRef}>
            {this.props.items.map(i => <option>{i}</option>)}
        </select>;
    }
}

export default Chosen;