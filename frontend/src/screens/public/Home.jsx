import React from "react";
import {
  useGetVideosQuery,
} from "../../slices/vidoApiSlice";
import { Link } from "react-router-dom";
import VideoCard from './VideoCard'

export const Home = () => {
  const { data, isLoading } = useGetVideosQuery();

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <div>Public Video</div>

      <div className=" grid grid-cols-2 lg:grid-cols-4">
        {data.map((d) => (
          <div key={d._id}>
            {d.isPublic === 1 ? <VideoCard d={d} /> : "No Public"}
          </div>
        ))}
      </div>
    </>
  );
};