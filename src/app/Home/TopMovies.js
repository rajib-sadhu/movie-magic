import Image from "next/image";
import TitlesComponent from "../components/TitlesComponent";
import { AiFillStar } from "react-icons/ai";


const TopMovies = () => {
    return (
        <div className="text-black bg-white py-10 md:px-40 px-5 min-h-[40rem]" >
            <TitlesComponent title={'Top Movies in Theater'} subtitle={'Checkout Top Movies'} />
            <div className="flex justify-between md:flex-row flex-col items-center gap-5">
                <div className="top-movies w-[200px] h-[300px]" >
                    <Image src={`https://m.media-amazon.com/images/M/MV5BYzFiZjc1YzctMDY3Zi00NGE5LTlmNWEtN2Q3OWFjYjY1NGM2XkEyXkFqcGdeQXVyMTUyMTUzNjQ0._V1_.jpg`}
                        width={200} height={300} className="object-cover h-full" />
                    <div className="absolute w-full h-full bg-[#1c8d73e6] top-movie-details p-5" >
                        <h1 className="text-2xl font-semibold text-[#c5ffef]" >Mission Impossible</h1>
                        <p className="text-sm text-white" >
                            <span>Rating: 7/10</span>
                            <span className="flex text-yellow-400">
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </span>
                        </p>
                        <button className="text-white text-xs px-2 py-1 bg-black rounded-full absolute bottom-5" >Book Ticket</button>
                    </div>
                </div>
                <div>
                    <Image src={`https://m.media-amazon.com/images/M/MV5BYzFiZjc1YzctMDY3Zi00NGE5LTlmNWEtN2Q3OWFjYjY1NGM2XkEyXkFqcGdeQXVyMTUyMTUzNjQ0._V1_.jpg`}
                        width={200}
                        height={300}
                    />
                </div>
                <div>
                    <Image src={`https://m.media-amazon.com/images/M/MV5BYzFiZjc1YzctMDY3Zi00NGE5LTlmNWEtN2Q3OWFjYjY1NGM2XkEyXkFqcGdeQXVyMTUyMTUzNjQ0._V1_.jpg`}
                        width={200}
                        height={300}
                    />
                </div>
                <div>
                    <Image src={`https://m.media-amazon.com/images/M/MV5BYzFiZjc1YzctMDY3Zi00NGE5LTlmNWEtN2Q3OWFjYjY1NGM2XkEyXkFqcGdeQXVyMTUyMTUzNjQ0._V1_.jpg`}
                        width={200}
                        height={300}
                    />
                </div>
            </div>
        </div>
    );
};

export default TopMovies;