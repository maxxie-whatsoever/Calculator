import React, {Component} from 'react';

class Display extends Component {

    render() {
        console.log(this.props)
        return(
            <div className='result'>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}

export default Display;