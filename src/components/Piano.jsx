import React from 'react'
import Octave from './Octave'

const Piano = () => {
    return (
        <div className='w-full h-screen mt-[-200px]'>
            <div className='flex flex-row justify-center items-center w-full h-full'>
                <Octave oct='0' />
                <Octave oct='1' />
                <Octave oct='2' />
            </div>
        </div>
    )
}

export default Piano