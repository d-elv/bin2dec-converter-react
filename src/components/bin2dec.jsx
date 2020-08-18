import React, { Component, useState } from "react";

class Bin2Dec extends Component {
    state = {
        decimal: 0,
        valid: true,
    };

    handleInputChange = (e) => {
        let binary = e.target.value;
        this.inputValidator(binary);
        let decimal = parseInt(binary, 2);
        if (isNaN(decimal)) {
            decimal = 0;
        }

        this.setState({ decimal });
    };

    inputValidator = (binary) => {
        let { valid } = this.state.valid;
        let re = /([0-1*]$)/;
        binary.toString();

        if (binary === "") {
            binary = "0";
        }
        if (re.test(binary) !== true) {
            valid = false;
            console.log("shit's fucked!");
            return this.setState({ valid });
        } else {
            valid = true;
            return this.setState({ valid });
        }

        // TODO: CREATE A NICE FLOATY RED BOX WARNING USER OF INCORRECT INPUT
    };

    render() {
        return (
            <div className="header">
                <h1>Sup! Type in a binary number below</h1>
                <p>
                    The binary number must only contain 0's and 1's and be a
                    maximum of 8 characters long with no spaces.
                </p>
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
