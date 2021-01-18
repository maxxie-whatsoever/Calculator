import React, {Component} from 'react';
import Display from './Display';
import Buttons from './Buttons.jsx';

class App extends Component {
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

