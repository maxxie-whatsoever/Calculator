import React, {Component} from 'react';

class Display extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            displayValue: '0'
        }
    }

    render() {
        let {display} = this.props;
        return(
            <div className='result'>

            </div>
        )
    }
}

export default Display;