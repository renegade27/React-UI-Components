import React from 'react';
import './Button.css';

const ActionButton = props => {
    if (props.name === "clear") {
        return (
            <div className="action clear">
                <p className="clear">{props.name}</p>
            </div>
        );      
    }
    else {
        return (
            <div className="action">
                <p className="small-button">{props.name}</p>
            </div>
        );
    }
}

export default ActionButton;