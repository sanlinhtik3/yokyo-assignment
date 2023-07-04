import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
const USERS_URL = "/api/videos";

const baseQuery = fetchBaseQuery({ baseUrl: "" });

export const videoApiSlice = createApi({
  baseQuery,
  reducerPath: "video",
  tagTypes: ["Video"],
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => ({
        url: `${USERS_URL}`,
        method: "GET",
      }),
      providesTags: ["Video"],
    }),
    createVideo: builder.mutation({
      query: (payload) => ({
        url: `${USERS_URL}`,
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Video"],
    }),
  }),
});

export const {useGetVideosQuery, useCreateVideoMutation} = videoApiSlice