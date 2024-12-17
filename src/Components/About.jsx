import bk from '../assets/Union.png'
import dot from '../assets/Frame1.png'
import img1 from '../assets/Frame 23.png'
import img2 from '../assets/icon.png'
import img3 from '../assets/icon (1).png'
import img4 from '../assets/icon (2).png'
import img5 from '../assets/icon (3).png'

const About = () => {
    return (
        <div className='max-w-[1440px] w-[95%] mx-auto py-[80px] md:py-[120px] lg:flex items-center gap-5'>
            <div className='lg:w-[710px] h-[915px] rounded-2xl bg-white relative'>
                <img className='absolute right-5 top-5' src={bk} alt="" />
                <div className='absolute z-10 p-7 top-[50%] translate-y-[-50%]'>
                    <h3 className='text-[20px] text-[#21763F]'>Abour Us</h3>
                    <h1 className='md:text-[42px] text-[30px] text-[#111322] font-semibold max-w-[542px]'>Aspired To Build A Better Financial World</h1>
                    <p className='text-[#4A5578] py-5'>Raqamyah is a Sharia-compliant crowdlending platform licensed by the Saudi Central Bank (SAMA). It connects SMEs seeking financing with investors looking for competitive returns. By directly funding SMEs, investors earn profits while supporting business growth and economic development. The platform’s mission is to simplify and accelerate funding for small businesses to help them thrive.</p>
                    <div className='text-[#4A5578] space-y-4'>
                        <p><img className='inline' src={dot} alt="" /> Sharia-Compliant Crowdlending</p>
                        <p><img className='inline' src={dot} alt="" /> Empowering Business Growth</p>
                        <p><img className='inline' src={dot} alt="" /> Direct Investment Opportunities</p>
                        <p><img className='inline' src={dot} alt="" /> Regulated and Trusted</p>
                    </div>
                </div>
            </div>
            <div className='lg:mt-0 mt-5'>
                <div className='p-5 bg-white rounded-2xl'>
                    <img src={img1} alt="" />
                </div>
                <div className='bg-white p-5 rounded-2xl mt-5'>
                    <div className='flex justify-between gap-5'>
                        <div className='bg-[#F9F9FB] p-5 rounded-lg w-full'>
                            <img src={img2} alt="" />
                            <h3 className='text-sm md:text-[20px] font-semibold text-[#111322] mt-10'>Lower Rates</h3>
                        </div>
                        <div className='bg-[#F9F9FB] p-5 rounded-lg w-full'>
                            <img src={img3} alt="" />
                            <h3 className='text-sm md:text-[20px] font-semibold text-[#111322] mt-10'>Financing up to SAR 7.5M</h3>
                        </div>
                    </div>
                    <div className='flex justify-between gap-5 mt-5'>
                        <div className='bg-[#F9F9FB] p-5 rounded-lg w-full'>
                            <img src={img4} alt="" />
                            <h3 className='text-sm md:text-[20px] font-semibold text-[#111322] mt-10'>Faster Decision</h3>
                        </div>
                        <div className='bg-[#F9F9FB] p-5 rounded-lg w-full'>
                            <img src={img5} alt="" />
                            <h3 className='text-sm md:text-[20px] font-semibold text-[#111322] mt-10'>Shari’a Compliant</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;