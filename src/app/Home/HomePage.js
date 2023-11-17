'use client';
import Banner from "./Banner";
import '@/app/styles/home.css';
import TopMovies from "./TopMovies";
import Features from "./Features";
import Achievements from "./Achievements";
import Gallery from "./Gallery";
import Posters from "./Posters";
import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchMovies } from "@/redux/features/moviesSlice";

const HomePage = () => {

    const [allMovies, setAllMovie] = useState([]);

    // const { movies, isLoading, error } = useSelector((state) => console.log(state));
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(fetchMovies());
    //     if (!isLoading) {
    //         setAllMovie(movies);
    //     }
    // }, [])







    // const fetchMovies = async () => {
    //     try {
    //         const res = await fetch('/api/allMovies', { method: 'GET' });
    //         const data = await res.json();
    //         console.log(data)

    //     }
    //     catch (err) {
    //         console.log(err)
    //     }
    // }
    // useEffect(() => {
    //     fetchMovies();
    // }, [])


    return (
        <div>
            <Banner />
            <TopMovies />
            <Features />
            <Achievements />
            <Gallery />
            <Posters />
        </div>
    );
};

export default HomePage;