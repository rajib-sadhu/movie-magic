import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";




export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
    const res = await axios.get('@/app/api/allMovies');
    console.log(res.data)
    return res.data;
});


const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        isLoading: false,
        movies: [],
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.isLoading = false,
                state.movies = action.payload,
                state.error = null
        });
        builder.addCase(fetchMovies.rejected, (state, action) => {
            state.isLoading = false,
                state.movies = [],
                state.error = action.error.message
        });
    }
});

export default moviesSlice.reducer;