import styles from '@/app/styles/common.module.css';

import '@/app/styles/footer.css';

const Footer = () => {
    return (
        <div className="min-h-[25rem] mt-10 bg-[url('/footer-image.jpg')] bg-cover bg-bottom" >
            <div className="min-h-[25rem] backdrop-brightness-[.6] backdrop-blur-sm grid md:grid-cols-4 grid-cols-2 gap-5 md:px-40 px-5 md:py-10 py-5" >
                <div className='space-y-3 md:col-span-1 col-span-2' >
                    <h1 className="text-xl font-semibold" >Buy movie tickets easily with Aovis system nationwide</h1>
                    <button className={styles.primaryBtn} >Get Ticket</button>
                </div>
                <div>
                    <h2 className='text-xl uppercase font-semibold mb-5 pb-1 border-b-2 inline-block border-[#50DBB4]' >Links</h2>
                    <ul className='space-y-2 footer-links' >
                        <li  >About</li>
                        <li>My Account</li>
                        <li>Career</li>
                        <li>Contact</li>
                        <li>Movies</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-xl uppercase font-semibold mb-5 pb-1 border-b-2 inline-block border-[#50DBB4]' >Socials</h2>
                    <ul className='space-y-2 footer-links' >
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Linkedin</li>
                        <li>Twitter</li>
                    </ul>
                </div>
                <div className='md:col-span-1 col-span-2' >
                    <h2 className='text-xl uppercase font-semibold mb-5 pb-1 border-b-2 inline-block border-[#50DBB4]' >Newsletter</h2>
                    <div className='space-y-2' >
                        <h1 className='font-semibold text-[#868f7f]'>Subscribe to Leitmotif newsletter this very day.</h1>
                        <form>
                            <textarea name="" id="" cols="30" rows="4"></textarea>
                            <button type='submit' className={`${styles.primaryBtn} mt-2`} >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;