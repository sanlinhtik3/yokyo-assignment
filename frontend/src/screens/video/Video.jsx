import React from 'react'
import { useGetVideosQuery } from '../../slices/vidoApiSlice'

const Video = () => {
  const {data, isLoading} = useGetVideosQuery();

  // Loading
  if(isLoading) {
    return <h1>Loading</h1>
  }

  console.log(data)

  return (
    <>
      <div>Video</div>
      {data.map((d) => (
         <h1 key={d._id}>{d.name}</h1>
      ))}
    </>
  );
}

export default Video