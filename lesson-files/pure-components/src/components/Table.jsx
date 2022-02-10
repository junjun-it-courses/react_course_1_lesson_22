import React from "react";

class Table extends React.Component {
    render() {
        const { options } = this.props;
        return (
            <div>
                {this.props.items.map(i =>
                    <Cell data={i} options={options || []} />
                )}
            </div>
        );
    }
}

export default Table;