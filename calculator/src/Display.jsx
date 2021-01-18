import React, {Component} from 'react';

class Display extends React.Component {
    render() {
        let {display} = this.props;
        return(
            <div className='result'>
                <p>{display}</p>
            </div>
        )
    }
}

export default Display;