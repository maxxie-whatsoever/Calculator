import React, {Component} from 'react';

// const buttons = [
//     { data: 'c', label: 'C', className: 'zero' },
//     { data: 'ce', label: 'CE' },
// ];

class Buttons extends Component {

    render() {
        return (
            <div className='buttons'>
                <button data='c' onClick={e => this.props.onClick(e.target.data)} className='zero'> C</button>
                <button data='ce' onClick={e => this.props.onClick(e.target.data)}> CE</button>
                <button data='/' onClick={e => this.props.onClick(e.target.data)} className='orange'> ÷</button>

                <button data='7' onClick={e => this.props.onClick(e.target.data)}> 7</button>
                <button data='8' onClick={e => this.props.onClick(e.target.data)}> 8</button>
                <button data='9' onClick={e => this.props.onClick(e.target.data)}> 9</button>
                <button data='*' onClick={e => this.props.onClick(e.target.data)} className='orange'> ×</button>

                <button data='4' onClick={e => this.props.onClick(e.target.data)}> 4</button>
                <button data='5' onClick={e => this.props.onClick(e.target.data)}> 5</button>
                <button data='6' onClick={e => this.props.onClick(e.target.data)}> 6</button>
                <button data='-' onClick={e => this.props.onClick(e.target.data)} className='orange'> -</button>

                <button data='1' onClick={e => this.props.onClick(e.target.data)}> 1</button>
                <button data='2' onClick={e => this.props.onClick(e.target.data)}> 2</button>
                <button data='3' onClick={e => this.props.onClick(e.target.data)}> 3</button>
                <button data='+' onClick={e => this.props.onClick(e.target.data)} className='orange'> +</button>

                <button data='0' onClick={e => this.props.onClick(e.target.data)} className='zero'> 0</button>
                <button data='.' onClick={e => this.props.onClick(e.target.data)}> ,</button>
                <button data='=' onClick={e => this.props.onClick(e.target.data)} className='orange'> =</button>
            </div>
        )
    }
}

export default Buttons;