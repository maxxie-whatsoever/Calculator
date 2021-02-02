import React, {Component} from 'react';

const buttons = [
    { dataVal: 'c', label: 'C', className: 'zero' },
    { dataVal: 'ce', label: 'CE'},
    { dataVal: '/', label: '÷', className: 'orange' },
    { dataVal: '7' },
    { dataVal: '8' },
    { dataVal: '9' },
    { dataVal: '*', label: '×', className: 'orange' },
    { dataVal: '4'},
    { dataVal: '5'},
    { dataVal: '6'},
    { dataVal: '-', className: 'orange' },
    { dataVal: '1' },
    { dataVal: '2' },
    { dataVal: '3' },
    { dataVal: '+', className: 'orange' },
    { dataVal: '0', className: 'zero' },
    { dataVal: '.', label: ',' },
    { dataVal: '=', className: 'orange' },
];

class Buttons extends Component {

    render() {
        const listButton = buttons.map ( item => (
            <button
                data-val={item.dataVal}
                onClick={e => this.props.onClick(e.target.getAttribute('data-val'))}
                className={item.className}
                key={item.dataVal}
            >
                {item.label ? item.label : item.dataVal}
            </button>
        ))
        return (
            <div className='buttons'>
                {listButton}
            </div>
        )
    }
}

export default Buttons;