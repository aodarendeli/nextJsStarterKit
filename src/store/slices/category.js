import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
export const categoryApi = createApi({
    reducerPath: "categoryApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.ozgurdarendeli.info/api/categories/get-category",
    }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath];
        }
    },
    endpoints: (builder) => ({
        getCategoryData: builder.query({
            query: () => ({ url: "" }),
        }),
    }),
});

export const {
    useGetCategoryDataQuery,
    util: { getRunningQueryThunk },
    endpoints: { getCategoryData },
} = categoryApi;
