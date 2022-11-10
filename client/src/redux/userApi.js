import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/user",
  }),
  tagTypes: ["collection"],
  endpoints: (builder) => ({
    // register user
    register: builder.mutation({
      query(user) {
        return {
          url: "/register",
          method: "POST",
          body: user,
        };
      },
    }),
    // login user
    login: builder.mutation({
      query(user) {
        return {
          url: "/login",
          method: "POST",
          body: user,
        };
      },
    }),
    // Get collection
    getCollection: builder.query({
      query: (token) => {
        return {
          url: "/collection",
          method: "GET",
          headers: { Authorization: "Bearer " + token },
        };
      },
      providesTags: ["collection"],
    }),
    // Add collection
    addLike: builder.mutation({
      query(args) {
        const { data, token } = args;
        return {
          url: "/collection",
          method: "POST",
          body: data,
          headers: { Authorization: "Bearer " + token },
        };
      },
      invalidatesTags: ["collection"],
    }),
    addWatchLater: builder.mutation({
      query(args) {
        const { data, token } = args;
        return {
          url: "/collection",
          method: "POST",
          body: data,
          headers: { Authorization: "Bearer " + token },
        };
      },
      invalidatesTags: ["collection"],
    }),
    // Delete collection
    removeLike: builder.mutation({
      query(args) {
        const { id, token } = args;
        return {
          url: `/collection/${id}`,
          method: "DELETE",
          headers: { Authorization: "Bearer " + token },
        };
      },
      invalidatesTags: ["collection"],
    }),
    // Delete collection
    removeWatchLater: builder.mutation({
      query(args) {
        const { id, token } = args;
        return {
          url: `/collection/${id}`,
          method: "DELETE",
          headers: { Authorization: "Bearer " + token },
        };
      },
      invalidatesTags: ["collection"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetCollectionQuery,
  useAddLikeMutation,
  useAddWatchLaterMutation,
  useRemoveLikeMutation,
  useRemoveWatchLaterMutation
} = userApi;
