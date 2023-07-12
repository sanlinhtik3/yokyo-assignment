import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';
import { useUpdateUserMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import TextInput from '../components/TextInput';
import { Button } from '../components/Button';

const ProfileScreen = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  const [updateProfile, { isLoading }] = useUpdateUserMutation();

  useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email);
  }, [userInfo.email, userInfo.name]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
    } else {
      try {
        const res = await updateProfile({
          _id: userInfo._id,
          name,
          email,
          password,
        }).unwrap();
        console.log(res);
        dispatch(setCredentials(res));
        toast.success('Profile updated successfully');
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };
  return (
    <section className="py-10">
      <div className="max-w-2xl mx-auto px-10 py-10 bg-white rounded-2xl">
        <h2 className="mb-4 text-xl font-bold text-gray-900 ">
          Update Profile
        </h2>

        <form onSubmit={submitHandler} className=" space-y-6">
          <TextInput
            type="text"
            name="name"
            id="name"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
            value={name || ""}
            labelName="Name"
          />
          <TextInput
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email || ""}
            labelName="Email Address"
          />
          <TextInput
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password || ""}
            labelName="Enter password"
          />

          <TextInput
            type="password"
            name="password"
            id="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword || ""}
            labelName="Confirm Password"
          />

          <Button
            className=' w-full py-3 text-white'
          >Update</Button>

          {isLoading && <Loader />}
        </form>
      </div>
    </section>
  );
};

export default ProfileScreen;
