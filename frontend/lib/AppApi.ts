import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const AppApi = createApi({
  reducerPath: "AppApi",
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/',
    prepareHeaders: (headers) => {
      headers.set('Accept', 'application/json');
      return headers;
    },
  }),
  tagTypes: ['property'], 
  endpoints: () => ({}),
});

export default AppApi;
