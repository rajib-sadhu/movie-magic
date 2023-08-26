import Banner from "./Banner";
import '@/app/styles/home.css';
import TopMovies from "./TopMovies";
import Features from "./Features";
 
 const HomePage = () => {
    return (
        <div>
            <Banner/>
            <TopMovies/>
            <Features/>
        </div>
    );
 };
 
 export default HomePage;