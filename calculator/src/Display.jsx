import React, {Component} from 'react';

class Display extends Component {

    render() {
        const {result} = this.props;
        return(
            <div className='result'>
                <h1>{result}</h1>
            </div>
        )
    }
}

export default Display;