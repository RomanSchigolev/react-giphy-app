import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { INITIAL_LIMIT, INITIAL_RATING } from 'constants';
import { Response, Gif } from 'models';

export const gifApi = createApi({
  reducerPath: 'gifApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_GIPHY_API_BASE_URL }),
  endpoints: (builder) => ({
    getTrending: builder.query<Gif[], number>({
      query: (offset) => ({
        url: '/trending',
        params: {
          api_key: import.meta.env.VITE_GIPHY_API_KEY,
          offset,
          rating: INITIAL_RATING,
          limit: INITIAL_LIMIT,
        },
      }),
      transformResponse(response: Response) {
        return response.data;
      },
    }),
  }),
});

export const { useGetTrendingQuery, reducer: gifApiReducer } = gifApi;
