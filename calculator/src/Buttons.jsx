import React, {Component} from 'react';

class Buttons extends Component {
    render () {
        return (
            <div className='buttons'>
                <button name='c'>                               C      </button>
                <button name='+/-'>                             +/−    </button>
                <button name='%'>                               %      </button>
                <button name='divide'>                          ÷      </button>

                <button name='1'>                               7      </button>
                <button name='2'>                               8      </button>
                <button name='3'>                               9      </button>
                <button name='multiply'>                        ×      </button>

                <button name='4'>                               4      </button>
                <button name='5'>                               5      </button>
                <button name='6'>                               6      </button>
                <button name='subtract'>                        -      </button>

                <button name='7'>                               1      </button>
                <button name='8'>                               2      </button>
                <button name='9'>                               3      </button>
                <button name='add'>                             +      </button>

                <button name='0' className='zero'>              0      </button>
                <button name='comma'>                           ,      </button>
                <button name='equal'>                           =      </button>
            </div>
        )
    }
}

export default Buttons;