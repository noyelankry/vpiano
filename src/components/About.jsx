import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen'>
            <div className='text-gray-300 flex flex-col justify-center items-center w-full h-full'>
                <p className='text-2xl py-3'>Hi there.</p>
                <h2 className='text-6xl font-bold py-3'>This is a piano app</h2>
                <p className='text-2xl font-bold'>created in React for an educational purpose!</p>
                <p className='text-2xl font-bold py-1'>It is currently being built...</p>
                <p className='text-4xl font-bold'>please come back soon :)</p>
            </div>
        </div>
    )
}

export default About