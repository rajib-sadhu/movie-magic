import Banner from "./Banner";
import '@/app/styles/home.css';
import TopMovies from "./TopMovies";
import Features from "./Features";
import Achievements from "./Achievements";
 
 const HomePage = () => {
    return (
        <div>
            <Banner/>
            <TopMovies/>
            <Features/>
            <Achievements/>
        </div>
    );
 };
 
 export default HomePage;