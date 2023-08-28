"use client"

import Image from "next/image";
import TitlesComponent from "../components/TitlesComponent";

import { BsFillSearchHeartFill } from 'react-icons/bs';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Gallery = () => {

    const images = ['/gallery1.jpg', '/gallery2.jpg', '/gallery3.jpg', '/gallery4.jpg', '/gallery5.jpg', '/gallery6.jpg', '/gallery7.jpg', '/gallery8.jpg', '/gallery9.jpg'];


    return (
        <div className="md:px-40 px-5 pb-20" >
            <TitlesComponent title={`Videos and Photos`} subtitle={`Explore our gallery`} />
            <div className="grid md:grid-cols-5 grid-cols-1 gap-5" >
                <div className="md:col-span-2" >
                    <Image src={images[4]} alt="Gallery" width={600} height={600} className="object-cover" />
                    <div className="mt-5" >
                        <h3 className="text-xl font-semibold text-[#50DBB4]" >10 Cloverfield Lane</h3>
                        <p>
                            A young woman wakes up after a terrible accident to find that she’s… locked in a cellar with a doomsday prepper,… who insists that he saved her life and that the world outside is uninhabitable following an apocalyptic catastrophe. Uncertain what to believe, the woman soon….
                        </p>
                    </div>
                </div>
                <div className="md:col-span-3" >
                    <PhotoProvider>
                        <div className="grid grid-cols-3 gap-5" >
                            {
                                images.map((v, i) => {
                                    return <div  key={i} className="relative">
                                        <PhotoView src={v} >
                                            <Image src={v} alt="galleries" width={200} height={200} className="w-full h-full object-cover cursor-pointer hover:border-2 hover:scale-90 duration-500" />
                                        </PhotoView>
                                        {/* <div className="absolute border-2 w-[90%] h-[90%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 duration-500 hover:backdrop-blur-sm" >
                                            <BsFillSearchHeartFill className="text-6xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                                        </div> */}
                                    </div>
                                })
                            }
                        </div>
                    </PhotoProvider>
                </div>

            </div>
        </div>
    );
};

export default Gallery;