import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Icon404 from './assets/icons/Icon404'

const E404 = () => {

    const url = useParams()

    return (
        <>
            <div className=" w-full h-screen flex justify-center items-center flex-col">
                <Icon404 className='w-96' />
                <h1 class="mb-4 mt-20 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white font-poppins">Oops! <mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">404</mark> Not Found</h1>
                <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">error {window.location.href}</p>
                <Link to='/' className='mt-5 rounded-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2'>Go to Home</Link>
            </div>
        </>
    )
}

export default E404