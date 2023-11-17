import Image from "next/image";
// import { Parallax } from "react-parallax";

import { BiMedal } from 'react-icons/bi';
import { PiFilmReelFill } from 'react-icons/pi';
import { ImTicket } from 'react-icons/im';

const Achievements = () => {
    return (
        <>
            <div className="md:h-[35rem] h-[20rem] relative" >
                <Image src={`/cinema-hall.jpg`} alt="Achievement" width={1500} height={1200} className="w-full h-3/4 object-cover" />
                <section className="md:w-3/4 w-11/12 md:h-60 h-24 bg-white text-black md:border-b-8 border-b-2 border-[#50DBB4] absolute left-1/2 -translate-x-1/2 md:bottom-14 bottom-16" >
                    <div className="h-full w-full md:px-20 px-5 flex justify-between items-start" >
                       
                        <div className="flex items-end md:gap-4 gap-1" >
                            <div className="bg-[#50dbb448] p-2 md:h-48 h-20 md:w-24 w-14 flex items-end" >
                                <BiMedal className="md:text-8xl text-3xl mx-auto text-[#227745]" />
                            </div>
                            <div>
                                <h1 className="md:text-6xl text-lg font-bold" >23</h1>
                                <p className="md:text-xl text-[10px] font-semibold text-[#6b927b]" >Awards Won</p>
                            </div>
                        </div>

                        <div className="flex items-end md:gap-4 gap-1" >
                            <div className="bg-[#50dbb448] p-2 md:h-48 h-20 md:w-24 w-14 flex items-end" >
                                <PiFilmReelFill className="md:text-8xl text-3xl mx-auto text-[#227745]" />
                            </div>
                            <div>
                                <h1 className="md:text-6xl text-lg font-bold" >30</h1>
                                <p className="md:text-xl text-[10px] font-semibold text-[#6b927b]" >Films Partners</p>
                            </div>
                        </div>
                        
                        <div className="flex items-end md:gap-4 gap-1" >
                            <div className="bg-[#50dbb448] p-2 md:h-48 h-20 md:w-24 w-14 flex items-end" >
                                <ImTicket className="md:text-8xl text-3xl mx-auto text-[#227745]" />
                            </div>
                            <div>
                                <h1 className="md:text-6xl text-lg font-bold" >980</h1>
                                <p className="md:text-xl text-[10px] font-semibold text-[#6b927b]" >Tickets Sold</p>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </>
    );
};

export default Achievements;