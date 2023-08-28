"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Posters = () => {

    const images = [
        'https://m.media-amazon.com/images/M/MV5BMDJiNzUwYzEtNmQ2Yy00NWE4LWEwNzctM2M0MjE0OGUxZTA3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
    ]

    return (
        <div>
            <PhotoProvider>

                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    speed={10000}
                    loop={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: true
                    }}
                    modules={[Autoplay]}
                >
                    {
                        [...Array(10)].map((_, i) => <SwiperSlide key={i}>
                            <PhotoView src={`https://m.media-amazon.com/images/M/MV5BMDJiNzUwYzEtNmQ2Yy00NWE4LWEwNzctM2M0MjE0OGUxZTA3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg`} >
                                <Image src={`https://m.media-amazon.com/images/M/MV5BMDJiNzUwYzEtNmQ2Yy00NWE4LWEwNzctM2M0MjE0OGUxZTA3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg`} width={500} height={700} className='cursor-pointer' alt="Posters" />
                            </PhotoView>
                        </SwiperSlide>)
                    }


                </Swiper>
            </PhotoProvider>
        </div>
    );
};

export default Posters;