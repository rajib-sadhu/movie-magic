
import {PiFilmReel} from 'react-icons/pi';
import {AiOutlineGift} from 'react-icons/ai';
import {HiCreditCard} from 'react-icons/hi';
import {BiSolidCoupon} from 'react-icons/bi';
import {MdFastfood} from 'react-icons/md';
import Image from 'next/image';

const Features = () => {
    return (
        <div className="bg-slate-300 min-h-28 md:px-40 grid md:grid-cols-6 grid-cols-3 gap-5 md:p-0 p-5">
            <div className='text-slate-500 feature-icons' >
                <PiFilmReel className='md:text-6xl text-4xl' />
                <h4 className='md:text-xl font-semibold' >Cinemas</h4>
            </div>
            <div className='text-slate-500 feature-icons' >
                <AiOutlineGift className='md:text-6xl text-4xl' />
                <h4 className='md:text-xl font-semibold' >Promotions</h4>
            </div>
            <div className='text-slate-500 feature-icons' >
                <HiCreditCard className='md:text-6xl text-4xl' />
                <h4 className='md:text-xl font-semibold' >Vouchers</h4>
            </div>
            <div className='text-slate-500 feature-icons' >
                <MdFastfood className='md:text-6xl text-4xl' />
                <h4 className='md:text-xl font-semibold' >Foods</h4>
            </div>
            <div className='text-slate-500 feature-icons' >
                <BiSolidCoupon className='md:text-6xl text-4xl' />
                <h4 className='md:text-xl font-semibold' >Buy Tickets</h4>
            </div>
            <div>
                <Image src={`/popcorn.png`} width={50} height={100} className='md:w-[5rem] w-[4rem] mx-auto' />
            </div>
        </div>
    );
};

export default Features;