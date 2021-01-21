import React, {Component} from 'react';
import Display from './Display';
import Buttons from './Buttons.jsx';
import './App.css';
import './reset.css';

class App extends Component {
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

export default App;

