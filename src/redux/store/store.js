import moviesReducer from "../features/moviesSlice";

const { configureStore } = require("@reduxjs/toolkit");




const store = configureStore({
    reducer: {
        movies: moviesReducer
    }
});


export default store;