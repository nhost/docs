import React, {Component} from "react";
import ReactDOM from "react-dom";
//import "./discordButton.css";


export const discordbutton = ( {
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
}) => {
    return (
        <button onClick={onClick} type={type}>
            {children}
        </button>
    )
};
