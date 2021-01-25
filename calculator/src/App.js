import React, {Component} from 'react';
import Display from './Display';
import Buttons from './Buttons.jsx';
import './styles/App.css';
import './styles/index.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            displayValue: '0',
            value: 0
        }
    }

    clickEvent = button => {
        if(button === 'AC') {
            this.reset();
        }
    }

    reset = () =>  {
        this.setState({
            result: ''
        })
    }

    render() {
        return (
            <div className='container'>
                <Display name='0'/>
                <Buttons/>
            </div>
        )
    }
}

export default App;