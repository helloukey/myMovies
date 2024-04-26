import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_BACKEND_URL || ""}api`,
  }),
  endpoints: (builder) => ({
    getTrending: builder.query({
      query: (type) => `/trending/${type}`,
    }),

    getSingleTrending: builder.query({
      async queryFn(type, _queryApi, _extraOptions, fetchWithBQ) {
        const trendingList = await fetchWithBQ(`/trending/${type}`);
        if (trendingList.error) return { error: trendingList.error };
        const singleData = await trendingList.data.results.filter(
          (single) => single.media_type !== "person"
        )[Math.floor(Math.random() * 10)];
        if (singleData.media_type === "movie") {
          const result = await fetchWithBQ(`/trending/movie/${singleData.id}`);
          return result.data
            ? { data: { ...result.data, mediaType: "movie" } }
            : { error: result.error };
        }
        if (singleData.media_type === "tv") {
          const result = await fetchWithBQ(`/trending/show/${singleData.id}`);
          return result.data
            ? { data: { ...result.data, mediaType: "show" } }
            : { error: result.error };
        }
      },
    }),

    getMovieList: builder.query({
      query: (type) => `/list/movie/${type}`,
    }),

    getShowList: builder.query({
      query: (type) => `/list/show/${type}`,
    }),

    getMovieTrendingPage: builder.query({
      query: (page = 1) => `/trending/movie/page/${page}`,
    }),

    getMovieNowPlayingPage: builder.query({
      query: (page = 1) => `/movie/nowplaying/${page}`,
    }),

    getMoviePopularPage: builder.query({
      query: (page = 1) => `/movie/popular/${page}`,
    }),

    getMovieTopRatedPage: builder.query({
      query: (page = 1) => `/movie/toprated/${page}`,
    }),

    getMovieUpcomingPage: builder.query({
      query: (page = 1) => `/movie/upcoming/${page}`,
    }),

    getMovieDetailsPage: builder.query({
      query: (movie_id) => `/details/movie/${movie_id}`,
    }),

    getMovieGenrePage: builder.query({
      query: (args) => {
        const { page, genre } = args;
        return {
          url: `/movie/genre/${genre}/${page}`,
          params: { page, genre },
        };
      },
    }),

    getShowTrendingPage: builder.query({
      query: (page = 1) => `/trending/show/page/${page}`,
    }),

    getShowAiringTodayPage: builder.query({
      query: (page = 1) => `/show/airingtoday/${page}`,
    }),

    getShowPopularPage: builder.query({
      query: (page = 1) => `/show/popular/${page}`,
    }),

    getShowTopRatedPage: builder.query({
      query: (page = 1) => `/show/toprated/${page}`,
    }),

    getShowOnTheAirPage: builder.query({
      query: (page = 1) => `/show/ontheair/${page}`,
    }),

    getShowDetailsPage: builder.query({
      query: (show_id) => `/details/show/${show_id}`,
    }),

    getShowEpisodes: builder.query({
      query: (args) => {
        const { show_id, seasonNumber } = args;
        return {
          url: `/episodes/show/${show_id}/${seasonNumber}`,
          params: { show_id, seasonNumber },
        };
      },
    }),

    getShowGenrePage: builder.query({
      query: (args) => {
        const { page, genre } = args;
        return {
          url: `/show/genre/${genre}/${page}`,
          params: { page, genre },
        };
      },
    }),

    getPersonDetailsPage: builder.query({
      query: (person_id) => `/person/${person_id}`,
    }),

    getSearchResults: builder.query({
      query: (args) => {
        const { query, page } = args;
        return {
          url: `/search/${query}/${page}`,
          params: { query, page },
        };
      },
    }),
  }),
});

export const {
  useGetTrendingQuery,
  useGetSingleTrendingQuery,
  useGetMovieListQuery,
  useGetShowListQuery,
  useGetMovieTrendingPageQuery,
  useGetMovieNowPlayingPageQuery,
  useGetMoviePopularPageQuery,
  useGetMovieTopRatedPageQuery,
  useGetMovieUpcomingPageQuery,
  useGetMovieDetailsPageQuery,
  useGetMovieGenrePageQuery,
  useGetShowTrendingPageQuery,
  useGetShowAiringTodayPageQuery,
  useGetShowPopularPageQuery,
  useGetShowTopRatedPageQuery,
  useGetShowOnTheAirPageQuery,
  useGetShowDetailsPageQuery,
  useGetShowEpisodesQuery,
  useGetShowGenrePageQuery,
  useGetPersonDetailsPageQuery,
  useGetSearchResultsQuery,
} = tmdbApi;
