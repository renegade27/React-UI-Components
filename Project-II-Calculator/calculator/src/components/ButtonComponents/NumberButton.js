import React from 'react';
import './Button.css';

const NumberButton = props => {
    if (props.name === "0") {
        return (
            <div className="number zero">
                <p className="zero">{props.name}</p>
            </div>
        );      
    }
    else {
        return (
            <div className="number">
                <p className="small-button">{props.name}</p>
            </div>
        );
    }
}

export default NumberButton;
