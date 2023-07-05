import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
const USERS_URL = "/api/videos";

const baseQuery = fetchBaseQuery({ baseUrl: "" });

export const videoApiSlice = createApi({
  baseQuery,
  reducerPath: "video",
  tagTypes: ["Video"],
  endpoints: (builder) => ({
    getSingleVideo: builder.query({
      query: (video_id) => ({
        url: `${USERS_URL}/${video_id}`,
        method: "GET",
      }),
      providesTags: ["Video"],
    }),
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

    updateVideo: builder.mutation({
      query: ({id, dd}) => ({
        url: `${USERS_URL}/${id}`,
        method: "PATCH",
        body: dd,
      }),
      invalidatesTags: ["Video"],
    }),

    deleteVideo: builder.mutation({
      query: (payload) => ({
        url: `${USERS_URL}/${payload}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["Video"],
    }),
  }),
});

export const {useGetVideosQuery, useGetSingleVideoQuery, useCreateVideoMutation, useDeleteVideoMutation, useUpdateVideoMutation} = videoApiSlice