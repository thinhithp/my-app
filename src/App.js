import React, {Component} from 'react';
import Test from "./Demo";
import Test2 from "./Table";
import Test3 from "./Demo2";

class App extends Component {
    constructor() {
        super();
        this.state= {
            nameButton: "Adder"
        }
    }
    render() {
        return (
            <div>
                <Test nameButton={this.state.nameButton}/>
                <Test2 />
                <Test3></Test3>
            </div>
        );
    }
}

export default App;