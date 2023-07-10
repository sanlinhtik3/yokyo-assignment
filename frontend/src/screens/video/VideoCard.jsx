import React from 'react'
import { Link } from 'react-router-dom';
import {
  useDeleteVideoMutation,
} from "../../slices/vidoApiSlice";
import { BeakerIcon, EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/20/solid";

function MyComponent() {
  return (
    <div>
      <BeakerIcon className="h-6 w-6 text-blue-500" />
      <p>...</p>
    </div>
  );
}



const VideoCard = ({d, u, l}) => {
  const [deleteVideo, gg] = useDeleteVideoMutation();

  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="p-5">
          <iframe
            className="aspect-video w-full rounded-lg mb-2"
            src="https://www.youtube.com/embed/S2fLodWf_WQ"
            title="YouTube video player"
            // frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <a href="#">
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              {d.name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xs">
            {d?.description.length < 10
              ? d?.description
              : d?.description.substring(0, 10) + `...`}
          </p>

          {u?.access === 2 && (
            <span
              className={` text-xs ${
                d.isPublic === 0
                  ? "text-gray-800 bg-slate-200"
                  : "text-green-800 bg-green-200"
              } text-green-800 px-3 py-1 rounded-full`}
            >
              <span
                className={` w-2 h-2 ${
                  d.isPublic === 0 ? "bg-gray-800" : "bg-green-800"
                } inline-block rounded-full mr-1`}
              ></span>
              {d.isPublic === 0 ? "Draft" : "Public"}
            </span>
          )}

          <div className=" mt-3 flex items-center gap-2">
            <Link
              to={`/video/${d._id}`}
              href="#"
              className="flex justify-center items-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-xl text-xs px-3 py-2.5"
            >
              <EyeIcon className=" text-pink-50 w-4 mr-1" />
              Detail
            </Link>

            {u?.access === 2 && (
              <>
                <Link
                  to={`/video/update/${d._id}`}
                  href="#"
                  className="flex justify-center items-center focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-xl text-xs px-3 py-2.5 "
                >
                  <PencilIcon className=" text-pink-50 w-4 mr-1" /> Edit
                </Link>

                <button
                  className=" flex justify-center items-center focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-xl text-xs px-3 py-2.5"
                  onClick={() => deleteVideo(d._id)}
                >
                  <TrashIcon className=" text-pink-50 w-4 mr-1" /> Delete
                  {gg.isLoading && (
                    <div className="spinner-border text-danger" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  )}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoCard