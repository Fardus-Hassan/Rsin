import img1 from '../assets/Frame 48095934.png';
import img2 from '../assets/Frame 48095935.png';
import img3 from '../assets/Frame 48095936.png';
import img4 from '../assets/Frame 48095937.png';
import img5 from '../assets/Frame.png';
import img6 from '../assets/Shape.png';

const Banner = () => {
    return (
        <div className='max-w-[1440px] w-[95%] mx-auto'>
            <div className='flex flex-col xl:flex-row justify-between items-center gap-10 py-[60px] lg:py-[120px]'>
                <div className='flex items-center lg:items-start mb-8 lg:mb-0 gap-4'>
                    <div className='flex flex-col justify-end'>
                        <div className=''>
                            <img className='' src={img1} alt="" />
                        </div>
                        <div className='ml-[-12px] lg:ml-[-24px]'>
                            <img className='' src={img3} alt="" />
                        </div>
                    </div>
                    <div className='ml-[-5px] lg:ml-[-10px]'>
                        <img className='mb-2' src={img2} alt="" />
                        <img src={img4} alt="" />
                    </div>
                </div>
                <div>
                    <div className='bg-[#00233F] w-fit rounded-2xl flex justify-center gap-2 items-center p-2 mb-6'>
                        <img src={img5} alt="" />
                        <span className="bg-gradient-to-r from-[#1FE6C5] to-[#19EB4B] bg-clip-text text-transparent text-sm md:text-base lg:text-lg">
                            Islamic Finance, Shari’a Approved
                        </span>
                    </div>
                    <div className='w-full lg:w-[730px]'>
                        <h1 className='text-[36px] md:text-[50px] lg:text-[76px] leading-[44px] md:leading-[60px] lg:leading-[90px] text-gray-900 font-semibold py-5'>
                            Smart Investments for Verified SMEs
                        </h1>
                        <p className='text-[#4A5578] text-sm md:text-base'>
                            Smart Investments for Verified SMEs connects investors with vetted small businesses, promoting informed decisions and local economic growth
                        </p>
                        <div className='mt-6 md:mt-8 flex flex-wrap gap-4'>
                            <button className='bg-primary text-white text-sm sm:text-base px-6 py-4 rounded-[42px]'>Start Investing</button>
                            <button className='border border-primary text-[#111322] text-sm sm:text-base font-semibold px-6 py-4 rounded-[42px]'>Get Funded</button>
                        </div>
                        <div className='mt-6 md:mt-10'>
                            <p className='text-[#4A5578] text-sm md:text-base'>
                                See our <span className='text-[#111322] underline font-semibold'>2,000 reviews</span> on <span className='inline'><img className='inline h-4 md:h-5' src={img6} alt="" /></span> <span className='text-[#111322]'>Trustpilot</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

