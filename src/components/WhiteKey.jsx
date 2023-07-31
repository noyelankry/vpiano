import React from 'react'
import { useState, useEffect } from 'react'
import { notesToKeys } from '../utils/Consts'

const WhiteKey = (props) => {
    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress, true)
        document.addEventListener('keyup', handleKeyPress, true)
    })
    const [keyPressed, setKeyPressed] = useState(false)
    const handleKeyPress = (event) => {
        if (event.repeat) {
            return
        }
        if (notesToKeys[event.key] === (props.note + props.oct)) {
            setKeyPressed(!keyPressed)
        }
    }

    return (
        <div onKeyDown={handleKeyPress} className={keyPressed ?
            'bg-red-400 w-[60px] h-[300px] z-1 ml-[-3px] border-[3px] border-black' :
            'bg-white w-[60px] h-[300px] z-1 ml-[-3px] border-[3px] border-black'}>
            <div>
                <p className='text-[12px] mt-[260px]'>{props.note}{props.oct}</p>
            </div>
        </div>
    )
}

export default WhiteKey