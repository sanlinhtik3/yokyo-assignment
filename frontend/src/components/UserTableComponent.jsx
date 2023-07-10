import React from 'react'
import { useGetManageUsersQuery } from '../slices/usersManageApiSlice';
import Loader from './Loader'
import { Link } from 'react-router-dom';


const UserTableComponent = () => {

  const {data, isLoading} = useGetManageUsersQuery();

  if(isLoading) {
    return <>
        <div className="">
            <Loader/>
        </div>
    </>
  }

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
                  Status
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
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                      Online
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      to={`/manage-users/edit/${data._id}`}
                      className="font-medium text-blue-600 hover:underline"
                    >
                      Edit user
                    </Link>
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

export default UserTableComponent