import React, {Component} from 'react';
import Display from './Display';
import Buttons from './Buttons.jsx';
import './styles/App.css';

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {
        if(button === "="){
            this.calculate()
        } else if(button === "c"){
            this.reset()
        } else if(button === "ce"){
            this.backspace()
        } else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {

        this.setState({
            result: (eval(this.state.result) || "" ) + ""
        })
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <div className="container">
                    <Display result={this.state.result}/>
                    <Buttons onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;