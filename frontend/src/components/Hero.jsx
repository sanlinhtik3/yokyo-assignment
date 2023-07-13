import { Container, Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import VisitCount from './VisitCount';
import Footer from './Footer';
import { useGetManageUserQuery } from '../slices/usersManageApiSlice';
import GalleryMasonryGrid from './GalleryMasonryGrid';

const Hero = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { data, isLoading } = useGetManageUserQuery(userInfo?._id);

  const dispatch = useDispatch();
  const navigate = useNavigate();


  return (
    <div className='py-5 max-w-screen-xl mx-auto'>
      <div className='d-flex justify-content-center my-56'>
        <div className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75 text-center space-y-10 lg:space-y-20'>

          <h1 class="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 font-poppins">YOKYO</span> Fun olympic 2023</h1>
          <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            The Summer Olympic Games, also known as the Games of the Olympiad, and often referred to as the Summer Olympics, is a major international multi-sport event normally held once every four years.
          </p>



          {userInfo ? (
            <>
              {data?.access !== 0 && (
                <Link to={`/video`} className=' bg-blue-500 px-6 py-4 rounded-2xl text-white inline-block mb-4'>Go to video</Link>
              )}

              <p className='text-center mb-4'>
                Let's go to spend your time with our.
              </p>
            </>

          ) : (
            <></>
          )}

          <VisitCount />

          <h1 class="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-5xl lg:text-6xl font-poppins"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Top</span> Gallary</h1>

          <GalleryMasonryGrid />


        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hero;
