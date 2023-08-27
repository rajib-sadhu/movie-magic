
import {PiFilmReel} from 'react-icons/pi';
import {AiOutlineGift} from 'react-icons/ai';
import {HiCreditCard} from 'react-icons/hi';
import {BiSolidCoupon} from 'react-icons/bi';
import Image from 'next/image';

const Features = () => {
    return (
        <div className="bg-slate-300 min-h-28 md:px-40 flex items-center justify-between flex-wrap md:p-0 p-5">
            <div className='text-slate-500 feature-icons' >
                <PiFilmReel className='text-6xl mx-auto' />
                <h4 className='text-xl font-semibold' >Cinemas</h4>
            </div>
            <div className='text-slate-500 feature-icons' >
                <AiOutlineGift className='text-6xl mx-auto' />
                <h4 className='text-xl font-semibold' >Promotions</h4>
            </div>
            <div className='text-slate-500 feature-icons' >
                <HiCreditCard className='text-6xl mx-auto' />
                <h4 className='text-xl font-semibold' >Vouchers</h4>
            </div>
            <div className='text-slate-500 feature-icons' >
                <BiSolidCoupon className='text-6xl mx-auto' />
                <h4 className='text-xl font-semibold' >Buy Tickets</h4>
            </div>
            <div>
                <Image src={`/popcorn.png`} width={50} height={100} className='w-[5rem]' />
            </div>
        </div>
    );
};

export default Features;