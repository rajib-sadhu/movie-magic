'use client'

import { AiFillStar } from 'react-icons/ai';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';

import styles from '@/app/styles/common.module.css';


const Banner = () => {
    return (
        <div>
            <Swiper
                pagination={{
                    type: 'progressbar',
                }}
                navigation={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                modules={[Pagination, Navigation]}
            >
                <SwiperSlide>
                    <div className='bg-[url(https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg)] h-screen w-full bg-no-repeat bg-cover bg-center'>
                        <div className='w-full h-full grid md:grid-cols-2 grid-cols-1 backdrop-brightness-50 backdrop-blur-sm md:px-40 px-5 md:py-40 py-5' >
                            <div className='flex flex-col justify-center items-start gap-8'>
                                <h2 className='md:text-6xl text-4xl font-bold' >Oppenheimer</h2>
                                <p>Enjoy hassle-free access to your favorite theaters, pick your preferred seats, and embrace the cinematic adventure from the comfort of your screen.
                                </p>
                                <button className={styles.primaryBtn} >
                                    Get Ticket
                                </button>
                                <div className='text-xs space-x-2' >
                                    <span className='border px-5 py-2 uppercase hover:text-[#000000] hover:bg-[#50DBB4]' >Movie</span>
                                    <span className='border px-5 py-2 uppercase text-[#50DBB4] border-[#50DBB4] hover:text-[#091612] hover:bg-[#fff]' >Rank 36</span>
                                </div>
                            </div>
                            <div className='relative' >
                                <div className='absolute md:left-20 z-10' >
                                    <h4 className='md:text-xl text-shadow' >Release Year</h4>
                                    <p className='md:text-4xl text-xl font-bold releaseDate text-shadow' >2023</p>
                                </div>
                                <Image src={`https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg`}
                                    width={400} height={500} alt='movie'
                                    className='absolute h-full object-contain md:right-36 top-0 drop-shadow-2xl hover:scale-110 duration-300'
                                />
                                <div className='absolute md:bottom-0 -bottom-6 md:right-20 right-0' >
                                    <div className='mb-6 text-right' >
                                        <h4 className='text-5xl' >7<span className='text-xl' >/ 10</span> </h4>
                                        <div className='flex -gap-5 items-center justify-end text-yellow-500' >
                                            <p className='me-1 text-white text-shadow' >Rating:</p>
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-[url(https://m.media-amazon.com/images/M/MV5BYzFiZjc1YzctMDY3Zi00NGE5LTlmNWEtN2Q3OWFjYjY1NGM2XkEyXkFqcGdeQXVyMTUyMTUzNjQ0._V1_.jpg)] h-screen w-full bg-no-repeat bg-cover bg-center'>
                        <div className='w-full h-full grid md:grid-cols-2 grid-cols-1 backdrop-brightness-50 backdrop-blur-sm md:px-40 px-5 md:py-40 py-5' >
                            <div className='flex flex-col justify-center items-start gap-8'>
                                <h2 className='md:text-6xl text-4xl  font-bold' >Mission: Impossible - Dead Reckoning Part One</h2>
                                <p>Enjoy hassle-free access to your favorite theaters, pick your preferred seats, and embrace the cinematic adventure from the comfort of your screen.
                                </p>
                                <button className={styles.primaryBtn} >
                                    Get Ticket
                                </button>
                                <div className='text-xs space-x-2' >
                                    <span className='border px-5 py-2 uppercase hover:text-[#000000] hover:bg-[#50DBB4]' >Movie</span>
                                    <span className='border px-5 py-2 uppercase text-[#50DBB4] border-[#50DBB4] hover:text-[#091612] hover:bg-[#fff]' >Rank 36</span>
                                </div>
                            </div>
                            <div className='relative' >
                            <div className='absolute md:left-20 z-10' >
                                    <h4 className='md:text-xl text-shadow' >Release Year</h4>
                                    <p className='md:text-4xl text-xl font-bold releaseDate text-shadow' >2023</p>
                                </div>
                                <Image src={`https://m.media-amazon.com/images/M/MV5BYzFiZjc1YzctMDY3Zi00NGE5LTlmNWEtN2Q3OWFjYjY1NGM2XkEyXkFqcGdeQXVyMTUyMTUzNjQ0._V1_.jpg`}
                                    width={400} height={500} alt='movie'
                                    className='absolute h-full object-contain md:right-36 top-0 drop-shadow-2xl hover:scale-110 duration-300'
                                />
                                <div className='absolute md:bottom-0 -bottom-6 md:right-20 right-0'  >
                                    <div className='mb-6 text-right' >
                                        <h4 className='text-5xl' >7<span className='text-xl' >/ 10</span> </h4>
                                        <div className='flex -gap-5 items-center justify-end text-yellow-500' >
                                            <p className='me-1 text-white text-shadow' >Rating:</p>
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-[url(https://m.media-amazon.com/images/M/MV5BODEzNzRjY2EtY2U1My00YmZhLTkzMTYtMjhiNjI1ODJlNDE1XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg)] h-screen w-full bg-no-repeat bg-cover bg-center'>
                        <div className='w-full h-full grid grid-cols-2 backdrop-brightness-50 backdrop-blur-sm px-40 py-40' >
                            <div className='flex flex-col justify-center items-start gap-8'>
                                <h2 className='text-6xl font-bold' >The Beanie Bubble</h2>
                                <p>Enjoy hassle-free access to your favorite theaters, pick your preferred seats, and embrace the cinematic adventure from the comfort of your screen.
                                </p>
                                <button className={styles.primaryBtn} >
                                    Get Ticket
                                </button>
                                <div className='text-xs space-x-2' >
                                    <span className='border px-5 py-2 uppercase hover:text-[#000000] hover:bg-[#50DBB4]' >Movie</span>
                                    <span className='border px-5 py-2 uppercase text-[#50DBB4] border-[#50DBB4] hover:text-[#091612] hover:bg-[#fff]' >Rank 36</span>
                                </div>
                            </div>
                            <div className='relative' >
                                <div className='absolute left-20 z-10' >
                                    <h4 className='text-xl text-shadow' >Release Year</h4>
                                    <p className='text-4xl font-bold releaseDate text-shadow' >2023</p>
                                </div>
                                <Image src={`https://m.media-amazon.com/images/M/MV5BODEzNzRjY2EtY2U1My00YmZhLTkzMTYtMjhiNjI1ODJlNDE1XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg`}
                                    width={400} height={500} alt='movie'
                                    className='absolute h-full object-contain right-36 top-0 drop-shadow-2xl hover:scale-110 duration-300'
                                />
                                <div className='absolute bottom-0 right-20' >
                                    <div className='mb-6 text-right' >
                                        <h4 className='text-5xl' >7<span className='text-xl' >/ 10</span> </h4>
                                        <div className='flex -gap-5 items-center justify-end text-yellow-500' >
                                            <p className='me-1 text-white text-shadow' >Rating:</p>
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-[url(https://m.media-amazon.com/images/M/MV5BNjg5ODc0NjItZTk5OS00M2UyLTkwOWMtNWM1MDBhZTQyZGQ5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg)] h-screen w-full bg-no-repeat bg-cover bg-center'>
                        <div className='w-full h-full grid grid-cols-2 backdrop-brightness-50 backdrop-blur-sm px-40 py-40' >
                            <div className='flex flex-col justify-center items-start gap-8'>
                                <h2 className='text-6xl font-bold' >Corner Office</h2>
                                <p>Enjoy hassle-free access to your favorite theaters, pick your preferred seats, and embrace the cinematic adventure from the comfort of your screen.
                                </p>
                                <button className={styles.primaryBtn} >
                                    Get Ticket
                                </button>
                                <div className='text-xs space-x-2' >
                                    <span className='border px-5 py-2 uppercase hover:text-[#000000] hover:bg-[#50DBB4]' >Movie</span>
                                    <span className='border px-5 py-2 uppercase text-[#50DBB4] border-[#50DBB4] hover:text-[#091612] hover:bg-[#fff]' >Rank 36</span>
                                </div>
                            </div>
                            <div className='relative' >
                                <div className='absolute left-20 z-10' >
                                    <h4 className='text-xl text-shadow' >Release Year</h4>
                                    <p className='text-4xl font-bold releaseDate text-shadow' >2023</p>
                                </div>
                                <Image src={`https://m.media-amazon.com/images/M/MV5BNjg5ODc0NjItZTk5OS00M2UyLTkwOWMtNWM1MDBhZTQyZGQ5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg`}
                                    width={400} height={500} alt='movie'
                                    className='absolute h-full object-contain right-36 top-0 drop-shadow-2xl hover:scale-110 duration-300'
                                />
                                <div className='absolute bottom-0 right-20' >
                                    <div className='mb-6 text-right' >
                                        <h4 className='text-5xl' >7<span className='text-xl' >/ 10</span> </h4>
                                        <div className='flex -gap-5 items-center justify-end text-yellow-500' >
                                            <p className='me-1 text-white text-shadow' >Rating:</p>
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;