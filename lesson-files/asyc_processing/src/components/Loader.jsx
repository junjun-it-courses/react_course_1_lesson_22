import React from "react";
import axios from "axios";

class Loader extends React.Component {
    constructor(props) {
        super(props);
        this.state = { url: null };
    }

    handleClick = async () => {
        const res = await axios.get('/images/random');
        this.setState({ url: res.data });
    }

    render() {
        const { url } = this.state;
        return (
            <div>
                <button onClick={this.handleClick}>Load Random Image</button>
                {url && <img src={url} />}
            </div>
        );
    }
}

export default Loader;