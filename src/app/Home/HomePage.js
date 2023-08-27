import Banner from "./Banner";
import '@/app/styles/home.css';
import TopMovies from "./TopMovies";
import Features from "./Features";
import Achievements from "./Achievements";
import Gallery from "./Gallery";
import Posters from "./Posters";
 
 const HomePage = () => {
    return (
        <div>
            <Banner/>
            <TopMovies/>
            <Features/>
            <Achievements/>
            <Gallery/>
            <Posters/>
        </div>
    );
 };
 
 export default HomePage;