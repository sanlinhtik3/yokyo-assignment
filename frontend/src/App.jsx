import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import './App.css'

const App = () => {
  return (
    <>
      <main className="bg-gray-50">
        <Header />
        <ToastContainer />
        <div className="container mx-auto">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default App;
