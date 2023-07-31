import React from 'react'
import Piano from './Piano'

const Home = () => {
    return (
        <div name="home" className='w-full h-screen bg-blue-200 text-gray-800'>
            <div className='py-5'>
                <h1 className='mt-[100px] text-5xl'>Virtual Piano App</h1>
                <Piano />
            </div>
        </div>
    )
}

export default Home