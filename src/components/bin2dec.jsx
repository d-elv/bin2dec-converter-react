import React, { Component } from "react";

class Bin2Dec extends Component {
    state = {
        decimal: 0,
        valid: true,
    };

    handleInputChange = (e) => {
        const binary = e.target.value;
        const isValid = this.inputValidator(binary);
        let decimal = parseInt(binary, 2);

        if (isValid === false || binary === "") {
            decimal = 0;
        }
        this.setState({ decimal });
    };

    inputValidator = (binary) => {
        // Checks the input field for illegal characters. Updates state.valid to true or false accordingly.
        let isValid;
        const re = /^[0-1]*$/;
        binary.toString();

        if (re.test(binary) !== true) {
            this.setState({ valid: false });
            isValid = false;
        } else {
            this.setState({ valid: true });
            isValid = true;
        }
        return isValid;
    };

    render() {
        return (
            <div className="header">
                <h1>Sup! Type in a binary number below</h1>
                <p>
                    The binary number must only contain 0's and 1's and be a
                    maximum of 8 characters long with no spaces.
                </p>
                {/* <div className="error-container"> */}
                <div
                    className={
                        this.state.valid
                            ? "error-container-on"
                            : "error-container-off"
                    }
                >
                    <p className="error-hover">Please only use 0's and 1's</p>
                    <div className="error-hover-arrow" />
                </div>
                <input
                    onChange={this.handleInputChange}
                    className={
                        this.state.valid
                            ? "binary-box"
                            : "input-error binary-box"
                    }
                    type="text"
                    placeholder="Put binary here '00000001'"
                    maxLength="8"
                    name="binary"
                />

                <div className="decimal-output">
                    <span>Your decimal output is: {this.state.decimal}</span>
                </div>
            </div>
        );
    }
}

export default Bin2Dec;
