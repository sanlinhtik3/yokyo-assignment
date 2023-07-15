import React from 'react'
import { Link } from 'react-router-dom';
import { useDeleteContactMutation, useGetContactsQuery } from '../../../slices/contactApiSlice';
import Loader from '../../../components/Loader';
import DelBox from './DelBox';


const ContactTableComponent = () => {

  const {data, isLoading} = useGetContactsQuery()
  if(isLoading) {
    return <>
        <div className="">
            <Loader/>
        </div>
    </>
  }

  // Delete
  const [delete_contact, {isLoading: delete_loading}] = useDeleteContactMutation()


  return (
    <>
      <div className=" p-5 bg-white rounded-xl">
        <div className="relative overflow-x-auto bg-white rounded-xl">
          <table className="w-full text-xs text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Access
                </th>
                
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.map((data) => (
                <tr
                  key={data._id}
                  className="bg-white border-b hover:bg-gray-50 "
                >
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
                  >
                    <img
                      className="w-10 h-10 rounded-full"
                      src={`https://ui-avatars.com/api/?name=${data.name}`}
                      alt="Jese image"
                    />
                    <div className="pl-3">
                      <div className="text-base font-semibold">{data.name}</div>
                      <div className="font-normal text-gray-500">
                        {data.email}
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4">
                    {data.access === 0 ? "Pending" : data.access === 1 ? 'User': 'Admin'}
                  </td>
                  
                  <td className="px-6 py-4">
                    <Link
                      to={`/contact/${data._id}`}
                      className="font-medium text-blue-600 hover:underline mr-2"
                    >
                      Read
                    </Link>

                    <DelBox data={data} onClick={() => delete_contact(data._id)}/>

                    {/* <button onClick={() => delete_contact(data._id)}>Delete</button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ContactTableComponent