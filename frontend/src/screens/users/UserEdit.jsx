import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetManageUserQuery, useUpdateManageUsersMutation } from '../../slices/usersManageApiSlice';
import Loader from '../../components/Loader';
import TextInput from '../../components/TextInput';
import { toast } from 'react-toastify';

const UserEdit = () => {
  const { user_id } = useParams();
  const {data, isLoading} = useGetManageUserQuery(user_id)
  const [updateUser, aa] = useUpdateManageUsersMutation();
  const [inputs, setInputs] = useState({});
  
  if (isLoading) {
    return <Loader />;
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  

  const enteredInputs = {
    name: inputs.name,
    email: inputs.email,
    password: inputs.password,
    access: inputs.access
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    // if (inputs.password !== inputs.confirm_password) {
    //   return toast.error("Password do not match");
    // }
    try {
      const res = await updateUser({ id: user_id, dd: enteredInputs }).unwrap();
      toast.success(`Create Successfyl ${res.name}`);
      setInputs({});
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const options = [
    { value: 0, text: "Pending 🍏" },
    { value: 1, text: "User 🍌" },
    { value: 2, text: "Admin 🍌" },
  ];

  return (
    <>
      <section className=" lg:py-20 ">
        <div className="max-w-2xl bg-white mx-auto px-10 py-9 rounded-xl">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Update user info
          </h2>

          <form onSubmit={handleSubmit} className=" space-y-6">
            <TextInput
              type="text"
              name="name"
              id="name"
              placeholder="Aa"
              onChange={handleChange}
              defaultValue={data?.name || ""}
              data={data}
              labelName="Name"
            />
            <TextInput
              type="text"
              name="email"
              id="email"
              placeholder="example@example.com"
              onChange={handleChange}
              defaultValue={data?.email || ""}
              data={data}
              labelName="Email"
            />

            <TextInput
              type="text"
              name="password"
              id="password"
              placeholder="•••••••••"
              onChange={handleChange}
              defaultValue={""}
              data={data}
              labelName="Password"
            />
            <TextInput
              type="text"
              name="confirm_password"
              id="confirm_password"
              placeholder="•••••••••"
              onChange={handleChange}
              defaultValue={""}
              data={data}
              labelName="Confirm confirm_password"
            />

            <div className="">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select an option
              </label>

              <select
                id="countries"
                name="access"
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {options?.map((option, index) => (
                  <option key={index} value={option.value} selected={option.value === data?.access ? true : false}>{option.text}</option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            >
              update
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default UserEdit