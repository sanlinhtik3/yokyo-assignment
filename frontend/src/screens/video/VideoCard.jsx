import React from 'react'
import { Link } from 'react-router-dom';
import {
  useDeleteVideoMutation,
} from "../../slices/vidoApiSlice";


const VideoCard = ({d, key}) => {
  const [deleteVideo, gg] = useDeleteVideoMutation();

  return (
    <>
      <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
        <iframe
          className="aspect-video w-full"
          src="https://www.youtube.com/embed/S2fLodWf_WQ"
          title="YouTube video player"
          // frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {d.name}nnn
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {d.description}
          </p>

          <span
            className={` text-xs bg-green-100 ${
              d.isPublic === 0 ? "text-gray-800" : "text-green-800"
            } text-green-800 px-3 py-1 rounded-full`}
          >
            <span
              className={`w-[10px] h-[10px] ${
                d.isPublic === 0 ? "bg-gray-800" : "bg-green-800"
              } inline-block rounded-full mr-1`}
            ></span>
            {d.isPublic === 0 ? "Draft" : "Public"}
          </span>

          <Link
            to={`/video/${d._id}`}
            href="#"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Detail
          </Link>

          <Link
            to={`/video/update/${d._id}`}
            href="#"
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Edit
          </Link>

          <button
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            onClick={() => deleteVideo(d._id)}
          >
            Delete
            {gg.isLoading && (
              <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default VideoCard