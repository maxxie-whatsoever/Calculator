import React, {Component} from 'react';

class Display extends Component {

    render() {
        let {result} = this.props;
        return(
            <div className='result'>
                <h1>{result}</h1>
            </div>
        )
    }
}

export default Display;