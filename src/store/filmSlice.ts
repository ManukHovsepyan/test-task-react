import { createSlice } from "@reduxjs/toolkit";
import { featured, filmData } from "../data/filmsData"
import { sortFilmsByDate } from "shared/helpers/helper";

export interface FilmState {
}

export type FeaturedStateInterface = Record<string, string>

const initialState = {
	filmData: sortFilmsByDate(filmData as FeaturedStateInterface[]),
	activeFilm: featured as FeaturedStateInterface
}


const filmSlice = createSlice({
	name: "film",
	initialState,
	reducers: {
	  setFilmData(state, action) {
		state.filmData = action.payload
	  },
	  changeActive(state, action) {
		state.activeFilm = action.payload;
		sessionStorage.setItem("active-film", action.payload.Id);
	  },
	  setActiveFromSessionStorage(state) {
		const storedFilmId = sessionStorage.getItem("active-film");
		if (storedFilmId) {
		  const storedFilm = state.filmData?.find((film) => film.Id === storedFilmId);
		  if (storedFilm) {
			state.activeFilm = storedFilm;
		  }
		}
	  },
	},
  });

export const { changeActive, setActiveFromSessionStorage, setFilmData } = filmSlice.actions

export default filmSlice.reducer;