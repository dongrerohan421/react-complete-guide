import React from "react";

const person = props => {
    return (
        <p>
            I'm a {props.name} and {props.age} year old!
        </p>
    );
};

export default person;
