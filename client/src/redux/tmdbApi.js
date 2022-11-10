import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://mymovies.onrender.com/" }),
  endpoints: (builder) => ({
    getTrending: builder.query({
      query: (type) =>
        `api/trending/${type}`,
    }),

    getSingleTrending: builder.query({
      async queryFn(type, _queryApi, _extraOptions, fetchWithBQ) {
        const trendingList = await fetchWithBQ(
          `api/trending/${type}`
        );
        if (trendingList.error) return { error: trendingList.error };
        const singleData = await trendingList.data.results.filter(
          (single) => single.media_type !== "person"
        )[Math.floor(Math.random() * 10)];
        if (singleData.media_type === "movie") {
          const result = await fetchWithBQ(
            `api/trending/movie/${singleData.id}`
          );
          return result.data ? { data: {...result.data, mediaType: "movie"} } : { error: result.error };
        }
        if (singleData.media_type === "tv") {
          const result = await fetchWithBQ(
            `api/trending/show/${singleData.id}`
          );
          return result.data ? { data: {...result.data, mediaType: "show"} } : { error: result.error };
        }
      },
    }),

    getMovieList: builder.query({
      query: (type) =>
        `api/list/movie/${type}`,
    }),

    getShowList: builder.query({
      query: (type) =>
        `api/list/show/${type}`,
    }),

    getMovieTrendingPage: builder.query({
      query: (page = 1) =>
        `api/trending/movie/page/${page}`,
    }),

    getMovieNowPlayingPage: builder.query({
      query: (page = 1) =>
        `api/movie/nowplaying/${page}`,
    }),

    getMoviePopularPage: builder.query({
      query: (page = 1) =>
        `api/movie/popular/${page}`,
    }),

    getMovieTopRatedPage: builder.query({
      query: (page = 1) =>
        `api/movie/toprated/${page}`,
    }),

    getMovieUpcomingPage: builder.query({
      query: (page = 1) =>
        `api/movie/upcoming/${page}`,
    }),

    getMovieDetailsPage: builder.query({
      query: (movie_id) =>
        `api/details/movie/${movie_id}`,
    }),

    getMovieGenrePage: builder.query({
      query: (args) => { 
        const {page, genre} = args;
        return {
          url: `api/movie/genre/${genre}/${page}`,
          params: { page, genre }
        }
      }
    }),

    getShowTrendingPage: builder.query({
      query: (page = 1) =>
        `api/trending/show/page/${page}`,
    }),

    getShowAiringTodayPage: builder.query({
      query: (page = 1) =>
        `api/show/airingtoday/${page}`,
    }),

    getShowPopularPage: builder.query({
      query: (page = 1) =>
        `api/show/popular/${page}`,
    }),

    getShowTopRatedPage: builder.query({
      query: (page = 1) =>
        `api/show/toprated/${page}`,
    }),

    getShowOnTheAirPage: builder.query({
      query: (page = 1) =>
        `api/show/ontheair/${page}`,
    }),

    getShowDetailsPage: builder.query({
      query: (show_id) =>
        `api/details/show/${show_id}`,
    }),

    getShowEpisodes: builder.query({
      query: (args) => { 
        const {show_id, seasonNumber} = args;
        return {
          url: `api/episodes/show/${show_id}/${seasonNumber}`,
          params: { show_id, seasonNumber }
        }
      }
    }),

    getShowGenrePage: builder.query({
      query: (args) => { 
        const {page, genre} = args;
        return {
          url: `api/show/genre/${genre}/${page}`,
          params: { page, genre }
        }
      }
    }),

    getPersonDetailsPage: builder.query({
      query: (person_id) => `api/person/${person_id}`
    }),

    getSearchResults: builder.query({
      query: (args) => { 
        const {query, page} = args;
        return {
          url: `api/search/${query}/${page}`,
          params: { query, page }
        }
      }
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
