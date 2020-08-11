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

    switchNameHandler = newName => {
        // console.log("Was clicked");
        this.setState({
            persons: [
                { name: newName, age: "28" },
                { name: "Manu", age: "29" },
                { name: "Stephanie", age: "27" }
            ]
        });
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    };

    render() {
        const style = {
            backgroundColor: "white",
            font: "inherit",
            border: "1px solid blue",
            adding: "8px",
            cursor: "pointer"
        };
        return (
            <div className="App">
                <h1> Hi, I am React App </h1>
                <p>This is working too!</p>
                <button style={style} onClick={this.togglePersonsHandler}>
                    Toggle Persons
                </button>
                {this.state.showPersons ? (
                    <div>
                        <Person
                            name={this.state.persons[0].name}
                            age={this.state.persons[0].age}
                        />
                        <Person
                            name={this.state.persons[1].name}
                            age={this.state.persons[1].age}
                            click={this.switchNameHandler.bind(this, "Max!")}
                        >
                            My Hobbies: Racing
                        </Person>
                        <Person
                            name={this.state.persons[2].name}
                            age={this.state.persons[2].age}
                        />
                    </div>
                ) : null}
            </div>
        );
    }
}

export default App;
