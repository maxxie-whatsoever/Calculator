import React, {Component} from 'react';
import Display from './Display';
import Buttons from './Buttons.jsx';
import './styles/App.css';
import './styles/index.css';

class Calculator extends Component {
    constructor() {
        super();

        this.state = {
            result: ''
        }
    }

    render() {
        return (
            <div className='container'>
                <Display/>
                <Buttons />
            </div>
        )
    }
}

export default Calculator;