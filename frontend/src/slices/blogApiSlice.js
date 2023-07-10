import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
const USERS_URL = "/api/blog";

const baseQuery = fetchBaseQuery({ baseUrl: "" });

export const blogApiSlice = createApi({
  baseQuery,
  reducerPath: "blog",
  tagTypes: ["Blog"],
  endpoints: (builder) => ({

    // Get a blog from Blog DB
    // GET Method
    getSingleBlog: builder.query({
      query: (id) => ({
        url: `${USERS_URL}/${id}`,
        method: "GET",
      }),
      providesTags: ["Blog"],
    }),

    // Get blogs from Blog DB
    // GET Method
    getBlogs: builder.query({
      query: () => ({
        url: `${USERS_URL}`,
        method: "GET",
      }),
      providesTags: ["Blog"],
    }),

    createBlog: builder.mutation({
      query: (payload) => ({
        url: `${USERS_URL}`,
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Blog"],
    }),

    updateBlog: builder.mutation({
      query: ({ id, dd }) => ({
        url: `${USERS_URL}/${id}`,
        method: "PUT",
        body: dd,
      }),
      invalidatesTags: ["Blog"],
    }),

    deleteBlog: builder.mutation({
      query: (payload) => ({
        url: `${USERS_URL}/${payload}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["Blog"],
    }),

  }),
});

export const { useGetBlogsQuery, useGetSingleBlogQuery, useCreateBlogMutation, useDeleteBlogMutation, useUpdateBlogMutation } = blogApiSlice;