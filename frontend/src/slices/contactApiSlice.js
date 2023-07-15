import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
const USERS_URL = "/api/contact";

const baseQuery = fetchBaseQuery({ baseUrl: "" });

export const contactApiSlice = createApi({
  baseQuery,
  reducerPath: "contact",
  tagTypes: ["Contact"],
  endpoints: (builder) => ({
    getSingleContact: builder.query({
      query: (id) => ({
        url: `${USERS_URL}/${id}`,
        method: "GET",
      }),
      providesTags: ["Contact"],
    }),
    getContacts: builder.query({
      query: () => ({
        url: `${USERS_URL}`,
        method: "GET",
      }),
      providesTags: ["Contact"],
    }),
    createContact: builder.mutation({
      query: (payload) => ({
        url: `${USERS_URL}`,
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Contact"],
    }),

    updateContact: builder.mutation({
      query: ({id, dd}) => ({
        url: `${USERS_URL}/${id}`,
        method: "PATCH",
        body: dd,
      }),
      invalidatesTags: ["Contact"],
    }),

    deleteContact: builder.mutation({
      query: (payload) => ({
        url: `${USERS_URL}/${payload}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["Contact"],
    }),
  }),
});

export const {useGetContactsQuery, useGetSingleContactQuery, useCreateContactMutation, useDeleteContactMutation, useUpdateContactMutation} = contactApiSlice;