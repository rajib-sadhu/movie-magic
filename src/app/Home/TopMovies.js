import Image from "next/image";
import TitlesComponent from "../components/TitlesComponent";
import { AiFillStar } from "react-icons/ai";


const TopMovies = () => {

    const data = [
        {
            img: 'https://m.media-amazon.com/images/M/MV5BMzQ5ZDZhZDItZTNmZi00MWQ0LWJlNDUtZTE4ZWJmODNlM2Y3XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg',
            name: 'West Side Story'
        },
        {
            img: 'https://m.media-amazon.com/images/M/MV5BYWQ0NTE5NjUtZTQ5Mi00NWY0LTg3NDctNGI5NWIwNjdhYjA5XkEyXkFqcGdeQXVyMzcwMjU2NQ@@._V1_.jpg',
            name: 'Bawal'
        },
        {
            img: 'https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg',
            name: 'Doctor Strange in the Multiverse of Madness'
        },
        {
            img: 'https://m.media-amazon.com/images/M/MV5BYjI3NDg0ZTEtMDEwYS00YWMyLThjYjktMTNlM2NmYjc1OGRiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg',
            name: "Zack Snyder's Justice League"
        },
    ]

    return (
        <div className="text-black bg-white py-10 md:px-40 px-5 min-h-[40rem]" >
            <TitlesComponent title={'Top Movies in Theater'} subtitle={'Checkout Top Movies'} />
            <div className="flex justify-between md:flex-row flex-col items-center gap-5">
                {
                    data.map((item, i) => {
                        return (<div key={i} className="top-movies w-[200px] h-[300px]" >
                            <Image src={item.img}
                                width={200} height={300} className="object-cover h-full" 
                                alt="Top movies"
                                />
                            <div className="absolute w-full h-full bg-[#1c8d73e6] top-movie-details p-5" >
                                <h1 className="text-2xl font-semibold text-[#c5ffef]" >{item.name}</h1>
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
                        </div>)
                    })
                }
            </div>
        </div>
    );
};

export default TopMovies;