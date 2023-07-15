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

                <div class="mt-8">
                    <a href="/docs/getting-started/quickstart/" class="inline-flex items-center justify-between px-1 py-1 pr-4 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" aria-label="Component requires Flowbite JavaScript">
                        <span aria-hidden="true" class="text-xs bg-blue-600 rounded-full text-white px-3 py-1.5 mr-3 flex">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span className=' ml-1'>error</span>
                        </span>
                        <span class="text-sm font-medium">{window.location.href}</span>
                        
                    </a>
                </div>

                <Link to='/' className='mt-5 rounded-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2'>Go to Home</Link>
            </div>


        </>
    )
}

export default E404