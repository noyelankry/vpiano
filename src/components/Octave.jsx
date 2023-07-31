import React from 'react'
import WhiteKey from './WhiteKey'
import BlackKey from './BlackKey'

const Octave = (props) => {
    return (
        <div>
            <div className='flex flex-row'>
                <WhiteKey note="C" oct={props.oct} />
                <BlackKey note="C#" oct={props.oct} />
                <WhiteKey note="D" oct={props.oct} />
                <BlackKey note="D#" oct={props.oct} />
                <WhiteKey note="E" oct={props.oct} />
                <WhiteKey note="F" oct={props.oct} />
                <BlackKey note="F#" oct={props.oct} />
                <WhiteKey note="G" oct={props.oct} />
                <BlackKey note="G#" oct={props.oct} />
                <WhiteKey note="A" oct={props.oct} />
                <BlackKey note="A#" oct={props.oct} />
                <WhiteKey note="B" oct={props.oct} />
            </div>
        </div>
    )
}

export default Octave