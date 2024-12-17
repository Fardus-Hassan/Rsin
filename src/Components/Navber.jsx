import logo from '../assets/logo.png'
import arrow from '../assets/down-arrow.png'

const Navber = () => {
    return (
      <div className='shadow-md py-7'>
         <div className='max-w-[1440px] w-[95%] mx-auto'>
            <nav className='flex justify-between items-center'>
                <div className=''>
                    <img className='w-[153px]' src={logo} alt="logo" />
                </div>
                <div className='flex-grow'>
                    <ul className='flex justify-center items-center gap-10'>
                        <li>Home</li>
                        <li>For Business</li>
                        <li>For Investors</li>
                        <li>Financing Rates</li>
                        <li className='flex gap-2'>Others <span className='mt-[10px]'><img src={arrow} alt="" /></span></li>
                    </ul>
                </div>
                <div className='font-medium flex justify-between'>
                    <button className=' text-primary mr-10'>
                        Log In
                    </button>
                    <button className='bg-primary text-white px-8 py-4 rounded-[42px]'>
                        Apply Now
                    </button>
                </div>
            </nav>
        </div>
      </div>
    );
};

export default Navber;