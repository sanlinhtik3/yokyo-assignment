import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
const USERS_URL = "/api/manage-users";

const baseQuery = fetchBaseQuery({ baseUrl: "" });

export const usersManageApiSlice = createApi({
  baseQuery,
  reducerPath: "manage-user",
  tagTypes: ["ManageUser"],
  endpoints: (builder) => ({
    getManageUser: builder.query({
      query: (id) => ({
        url: `${USERS_URL}/${id}`,
        method: "GET",
      }),
      providesTags: ["ManageUser"],
    }),
    getManageUsers: builder.query({
      query: () => ({
        url: `${USERS_URL}`,
        method: "GET",
      }),
      providesTags: ["ManageUser"],
    }),
    updateManageUsers: builder.mutation({
      query: ({ id, dd }) => ({
        url: `${USERS_URL}/${id}`,
        method: "PUT",
        body: dd,
      }),
      providesTags: ["ManageUser"],
    }),
  }),
});

export const {
  useGetManageUserQuery,
  useGetManageUsersQuery,
  useUpdateManageUsersMutation
} = usersManageApiSlice;
