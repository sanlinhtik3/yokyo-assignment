import React, { useEffect } from "react";
import UserTableComponent from "../../components/UserTableComponent";
import { useSelector } from "react-redux";
import { useGetManageUserQuery } from "../../slices/usersManageApiSlice";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";

const Users = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { data, isLoading } = useGetManageUserQuery(userInfo._id);
  const navigate = useNavigate();

  useEffect(() => {
    if (data?.access === 0 || data?.access === 1) {
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

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className=" py-10">
        <h2 className="mb-4 text-xl font-bold text-gray-900 ">Manage users</h2>
        <UserTableComponent />
      </div>
    </div>
  );
};

export default Users;
