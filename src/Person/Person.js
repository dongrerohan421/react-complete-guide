import React from "react";

const person = props => {
    return (
        <div>
            <p>
                I'm a {props.name} and {props.age} year old!
            </p>
            <p>{props.children}</p>
        </div>
    );
};

export default person;
