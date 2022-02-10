import React from "react";

class CustomTextInput extends React.Component {
    handleFocusTextInput = () => {
        // Explicitly focus the text input using the raw DOM API
        console.log(this.textInput);
        this.textInput.current.focus();
    };

    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    ref={this.textInput} />
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.handleFocusTextInput}
                />
            </div>
        );
    }
}

export default CustomTextInput;