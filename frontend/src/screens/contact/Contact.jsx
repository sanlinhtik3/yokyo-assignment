import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import VideoCard from './VideoCard';
import Loader from '../../components/Loader'
import { useGetManageUserQuery } from '../../slices/usersManageApiSlice';
import { useSelector } from 'react-redux';
import { PlusCircleIcon } from '@heroicons/react/20/solid';
import { useGetContactsQuery } from '../../slices/contactApiSlice';
import ContactTableComponent from './components/ContactTableComponent';
import EmptyIcon from '../../assets/icons/EmptyIcon';
import { EmptySVG } from '../../assets/icons/EmptySVG';

const Contact = () => {
  const { data, isLoading } = useGetContactsQuery();
  const navigate = useNavigate()

  const { userInfo } = useSelector((state) => state.auth);
  const { data: u, isLoading: l } = useGetManageUserQuery(userInfo?._id);


  useEffect(() => {
    if (u?.access === 0 || u?.access === 1) {
      return navigate(`/`);
    }
  }, [navigate, data, u]);

  // Loading
  if (isLoading) {
    return <>
      <Loader />
    </>
  }

  return (
    <div className='max-w-screen-xl mx-auto p-4'>

      <h1 className=" text-3xl font-bold my-3 lg:my-10">Contacts</h1>
      {/* {u?.access === 2 && (
        <button
          onClick={() => navigate(`/contact/create`)}
          className="flex items-center py-2.5 px-3 mr-2 mb-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-xl border border-gray-100 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 "
        >
          <PlusCircleIcon className=" w-4 mr-2" />
          Create Contact
        </button>
      )} */}

      {data?.length === 0 ? (
        <div className=" text-center space-y-5 lg:space-y-10">
          <EmptySVG className='w-60 mx-auto' />
          <h1 class="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-5xl lg:text-6xl font-poppins"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Oops!</span> Empty Contact</h1>
        </div>
      ) : (<ContactTableComponent />)}


    </div>
  );
}

export default Contact