import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
    state = {
        persons: [
            { name: "Max", age: "28" },
            { name: "Manu", age: "29" },
            { name: "Stephanie", age: "26" }
        ],
        otherState: "This is other state",
        showPersons: false
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    };

    deletePersonsHandler = personIndex => {
        const persons = this.state.persons;
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    };

    render() {
        const style = {
            backgroundColor: "white",
            font: "inherit",
            border: "1px solid blue",
            adding: "8px",
            cursor: "pointer"
        };

        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                            <Person
                                name={person.name}
                                age={person.age}
                                click={() => this.deletePersonsHandler(index)}
                            />
                        );
                    })}
                </div>
            );
        }

        return (
            <div className="App">
                <h1> Hi, I am React App </h1>
                <p>This is working too!</p>
                <button style={style} onClick={this.togglePersonsHandler}>
                    Toggle Persons
                </button>
                {persons}
            </div>
        );
    }
}

export default App;
