import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokeApi = createApi({
  reducerPath: 'pokeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getGeneration: builder.query({
      query: (number: string | null) => `generation/${number}`,
    }),
    individualPokemon: builder.query({
      query: (id: number) => `pokemon/${id}`,
    }),
  }),
});

export default pokeApi.reducer;

export const { useGetGenerationQuery, useIndividualPokemonQuery } = pokeApi;
