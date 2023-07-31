import React from 'react'
import { useState, useEffect } from 'react'
import { notesToKeys } from '../utils/Consts'

const BlackKey = (props) => {
    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress, true)
        window.addEventListener('keyup', handleKeyPress, true)
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
            'w-[36px] h-[200px] z-0 ml-[-18px] mr-[-18px] bg-red-400' :
            'w-[36px] h-[200px] z-0 ml-[-18px] mr-[-18px] bg-black'}>
        </div>
    )
}

export default BlackKey