import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen.jsx';
import RegisterScreen from './screens/RegisterScreen.jsx';
import ProfileScreen from './screens/ProfileScreen.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import Video from './screens/video/Video.jsx';
import CreateVideo from './screens/video/CreateVideo.jsx';
import DetailVideo from './screens/video/DetailVideo.jsx';
import UpdateVideo from './screens/video/UpdateVideo.jsx';
import './index.css'
import { Home } from './screens/public/Home.jsx';
import Users from './screens/users/Users.jsx';
import UserEdit from './screens/users/UserEdit.jsx';
import Blog from './screens/blog/Blog.jsx';
import { BlogCreate } from './screens/blog/BlogCreate.jsx';
import { EditCreate } from './screens/blog/BlogEdit.jsx';
import BlogRead from './screens/blog/BlogRead.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/video" element={<Video />} />
        <Route path="/video/create" element={<CreateVideo />} />
        <Route path="/video/:video_id" element={<DetailVideo />} />
        <Route path="/video/update/:video_id" element={<UpdateVideo />} />

        {/* Users */}
        <Route path="manage-users" element={<Users />} />
        <Route path="manage-users/edit/:user_id" element={<UserEdit />} />

        {/* Blog */}
        <Route path="blog" >
          <Route index={true} element={<Blog />} />
          <Route path="create" element={<BlogCreate />} />
          <Route path=":id" element={<BlogRead />} />
          <Route path="edit/:id" element={<EditCreate />} />
        </Route>

      </Route>

      {/* Public */}
      <Route path="public" element={<Home />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
