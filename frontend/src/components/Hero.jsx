import { Container, Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import VisitCount from './VisitCount';
import Footer from './Footer';

const Hero = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  return (
    <div className='py-5 max-w-screen-xl mx-auto'>
      <div className='d-flex justify-content-center my-56'>
        <div className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75 text-center'>
          <h1 className='text-center mb-4 text-6xl font-bold font-poppins'>Yoko</h1>


          {userInfo ? (
            <>
              <Link to={`/video`} className=' bg-pink-500 px-6 py-4 rounded-2xl text-white inline-block mb-4'>Go to video</Link>

              <p className='text-center mb-4'>
                Let's go to span your time with our.
              </p>
            </>

          ) : (
            <div className='d-flex'>
              <Button variant='primary' href='/login' className='me-3'>
                Sign In
              </Button>
              <Button variant='secondary' href='/register'>
                Register
              </Button>
            </div>
          )}

          <VisitCount />


        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Hero;
