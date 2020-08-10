import React from "react";
import "./Person.css";

const person = props => {
    return (
        <div className="Person">
            <p onClick={props.click}>
                I'm a {props.name} and {props.age} year old!
            </p>
            <p>{props.children}</p>
        </div>
    );
};

export default person;
