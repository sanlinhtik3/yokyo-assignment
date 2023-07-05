import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetSingleVideoQuery } from '../../slices/vidoApiSlice'
import VideoCard from './VideoCard'
import { Link } from "react-router-dom";
import { useDeleteVideoMutation } from "../../slices/vidoApiSlice";

const DetailVideo = () => {

  const {video_id} = useParams()
  // const navigate = useNavigate()

  const {data, isLoading} = useGetSingleVideoQuery(video_id)
  // const [deleteVideo, gg] = useDeleteVideoMutation();


  if(isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="px-3 lg:px-0">
      <button
        type="button"
        
        class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        Back
      </button>

      <div className="grid md:grid-cols-2 lg:gap-10">
        <div className="">
          <iframe
            className="aspect-video w-full rounded-xl"
            src="https://www.youtube.com/embed/S2fLodWf_WQ"
            title="YouTube video player"
            // frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="p-5 bg-gray-50 mt-5 rounded-xl space-y-3">
            <div className="">
              <span
                className={` text-xs bg-green-100 ${
                  data.isPublic === 0 ? "text-gray-800" : "text-green-800"
                } text-green-800 px-3 py-1 rounded-full`}
              >
                <span
                  className={`w-[10px] h-[10px] ${
                    data.isPublic === 0 ? "bg-gray-800" : "bg-green-800"
                  } inline-block rounded-full mr-1`}
                ></span>
                {data.isPublic === 0 ? "Draft" : "Public"}
              </span>
            </div>

            <Link
              to={`/video/update/${data._id}`}
              href="#"
              className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              Edit
            </Link>

            {/* <button
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              onClick={() => deleteVideo(data._id)}
            >
              Delete
              {gg.isLoading && (
                <div className="spinner-border text-danger" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              )}
            </button> */}
          </div>
        </div>
        <div className="">
          <h1 className=" text-3xl mb-5 font-bold text-gray-800">
            {data.name}
          </h1>

          <p className=" text-gray-700">{data.description}</p>
        </div>
      </div>
    </div>
  );
}

export default DetailVideo