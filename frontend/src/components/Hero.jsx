import { Container, Card, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useGetManageUserQuery } from '../slices/usersManageApiSlice';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Loader from './Loader';

const Hero = () => {


  // const { userInfo } = useSelector((state) => state.auth);
  // const { data, isLoading } = useGetManageUserQuery(userInfo._id);
  // const navigate = useNavigate();


  // useEffect(() => {
  //   if (data?.access === 0) {
  //     return navigate(`/video`);
  //   }
  // }, [navigate, data]);

  // if (isLoading) {
  //   return (
  //     <>
  //       <Loader />
  //     </>
  //   );
  // }

  return (
    <div className=' py-5'>
      <Container className='d-flex justify-content-center'>
        <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75 text-center'>
          <h1 className='text-center mb-4'>Yoko</h1>
          <h1 className='text-center text-5xl mb-4'>
            {/* {data?.access === 0 && 'Pending'} */}
          </h1>
          <Link to={`/video`} className=' bg-pink-500 px-6 py-4 rounded-2xl text-white'>Go to video</Link>
          <p className='text-center mb-4'>
            This is a boilerplate for Yoko that stores a JWT in
            an HTTP-Only cookie. It also uses Redux Toolkit and Tailwindcss
          </p>
          <div className='d-flex'>
            <Button variant='primary' href='/login' className='me-3'>
              Sign In
            </Button>
            <Button variant='secondary' href='/register'>
              Register
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
