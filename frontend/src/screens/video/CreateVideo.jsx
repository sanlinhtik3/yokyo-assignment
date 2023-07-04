import React, { useState } from 'react'
import { useCreateVideoMutation } from '../../slices/vidoApiSlice';
import { toast } from "react-toastify";

const CreateVideo = () => {

    const [createVideo, response] = useCreateVideoMutation()
    // console.log(response)

    // if(response.isLoading) {
    //     return <h1>Loading...Data</h1>
    // }

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      // console.log(inputs)
      await createVideo(inputs).unwrap();
      // try {
      // } catch (err) {
      //   toast.error(err?.data?.message || err.error);
      // }
        
    };

  return (
    <>
      <h1>CreateVideo</h1>

      {JSON.stringify(response.error)}


      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            name="name"
            value={inputs.name || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter your age:
          <input
            type="text"
            name="video_link"
            value={inputs.video_link || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter your age:
          <input
            type="text"
            name="description"
            value={inputs.description || ""}
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </form>
    </>
  );
}

export default CreateVideo