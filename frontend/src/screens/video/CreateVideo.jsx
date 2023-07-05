import React, { useState } from 'react'
import { useCreateVideoMutation } from '../../slices/vidoApiSlice';
import { toast } from "react-toastify";

const CreateVideo = () => {

    const [createVideo, {isLoading}] = useCreateVideoMutation()
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
      try {
        const res = await createVideo(inputs).unwrap();
        toast.success(`Create Successfyl ${res.name}`);
        setInputs({})
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
        
    };

  return (
    <>
      <h1>CreateVideo</h1>

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
        <button className="btn btn-primary">
          Submit
          {isLoading && (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </button>
      </form>
    </>
  );
}

export default CreateVideo