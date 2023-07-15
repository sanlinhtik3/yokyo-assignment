import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetSingleVideoQuery } from '../../slices/vidoApiSlice'
import VideoCard from './VideoCard'
import { Link } from "react-router-dom";
import { useDeleteVideoMutation } from "../../slices/vidoApiSlice";
import { ChevronLeftIcon, PencilIcon } from '@heroicons/react/20/solid';
import { useSelector } from 'react-redux';
import { useGetManageUserQuery } from '../../slices/usersManageApiSlice';
import Loader from '../../components/Loader';
import { useGetSingleContactQuery } from '../../slices/contactApiSlice';
import E404 from '../../E404';

const DetailContact = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  const { data, isLoading } = useGetSingleContactQuery(id)
  // const [deleteVideo, gg] = useDeleteVideoMutation();

  const { userInfo } = useSelector((state) => state.auth);
  const { data: d, isLoading: l } = useGetManageUserQuery(userInfo._id);


  useEffect(() => {
    if (d?.access === 0) {
      return navigate(`/`);
    }
  }, [navigate, data]);

  if (isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (id !== data?._id || l) {
    return <E404/>
  }

  return (
    <div className="px-3 lg:px-0 max-w-screen-xl mx-auto mt-10">
      <button
        type="button"
        onClick={() => navigate(`/contact`)}
        className=" flex justify-center items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-2.5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        <ChevronLeftIcon className=' w-5 inline-block' />
        Back
      </button>


      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data?.name}</h5>
        </a>
          <a href={`mailto:{data?.email}`} className=" block mb-2 text-xs font-bold tracking-tight text-gray-900 dark:text-white">{data?.email}</a>
          <a href={`tel:{data?.phone}`} className=" block mb-2 text-xs font-bold tracking-tight text-gray-900 dark:text-white">{data?.phone}</a>
        
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data?.description}</p>
        {/* <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a> */}
      </div>


      

    </div>
  );
}

export default DetailContact