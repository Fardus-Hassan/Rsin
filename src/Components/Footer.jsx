import logo from '../assets/logo.png';
import fb from '../assets/fb.png';
import ins from '../assets/ins.png';
import link from '../assets/link.png';
import x from '../assets/x.png';
import location from '../assets/location-01-solid-rounded 2.png';
import ios from '../assets/Store download button.png';
import play from '../assets/Store download button (1).png';
import qr from '../assets/image 33.png';

const Footer = () => {
    return (
        <div className="">
            <div className="shadow-sm bg-white">
                <div className="max-w-[1440px] w-[95%] mx-auto">
                    <div className="flex flex-col lg:flex-row justify-between lg:py-[80px] py-10 gap-10">
                        <div>
                            <img className='xl:w-[153px] lg:w-[120px] w-[100px]' src={logo} alt="logo" />
                            <p className="text-sm text-[#4A5578] font-medium mt-8 max-w-[392px]">
                                <span className="font-semibold">Disclaimer:</span> Due to the periodic changes of information/requirement/document, RSIN doesn’t provide any confirmation, guarantee or representation, express or implied, that the information contained or referenced herein is completely accurate or final. <span className="text-primary font-semibold">click here</span>
                            </p>
                        </div>
                        <div className="text-[#00233F] space-y-5">
                            <h4 className="text-[#111322] font-semibold">Services</h4>
                            <p>For Investors</p>
                            <p>For Business</p>
                        </div>
                        <div className="text-[#00233F] space-y-5">
                            <h4 className="text-[#111322] font-semibold">Company</h4>
                            <p>About Us</p>
                            <p>How it Works</p>
                            <p>Contact Us</p>
                            <p>FAQ</p>
                        </div>
                        <div className="text-[#00233F] space-y-5">
                            <h4 className="text-[#111322] font-semibold">Information</h4>
                            <p>Legal</p>
                            <p>Learn more as an Investor</p>
                            <p>Learn More as a Borrower</p>
                            <p>Key Principles & Rules</p>
                            <p>Complains and Suggestions</p>
                        </div>
                        <div className="space-y-5">
                            <h4 className="text-[#111322] font-semibold">Action</h4>
                            <button className="bg-primary text-white block text-sm sm:text-base px-6 py-4 rounded-[42px]">Start Investing</button>
                            <button className="border border-primary text-[#111322] text-sm sm:text-base font-semibold px-8 py-4 rounded-[42px]">Get Funded</button>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between lg:py-[80px] py-10 border-t gap-10">
                        <div className="space-y-3">
                            <h4 className="text-[#111322] font-semibold">Contact Us</h4>
                            <p className="text-primary font-semibold text-sm">
                                <span className="text-[#4A5578] font-normal">Email:</span> contactus@rsin.com
                            </p>
                            <p className="text-primary font-semibold text-sm">
                                <span className="text-[#4A5578] font-normal">Phone:</span> 8001000265
                            </p>
                            <div className="flex gap-4 pt-2">
                                <img src={fb} alt="Facebook" />
                                <img src={ins} alt="Instagram" />
                                <img src={link} alt="LinkedIn" />
                                <img src={x} alt="Twitter" />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-[#111322] font-semibold">Office Address</h4>
                            <p className="max-w-[370px] text-[#4A5578] text-sm">
                                Address: 1st Floor, Homestead Gulshan Link Tower, DCC TA-99, Gulshan-Badda Link Road, Gulshan-1, Dhaka-1212
                            </p>
                            <p className="text-sm text-primary font-semibold">
                                <span>
                                    <img className="inline" src={location} alt="Location" />
                                </span>{" "}
                                View Location
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row lg:items-start gap-4">
                            <div className="space-y-4 mt-2">
                                <img src={ios} alt="iOS Store" />
                                <img src={play} alt="Google Play" />
                                <span className="text-xs font-light mt-4 block">Get the app now</span>
                            </div>
                            <div>
                                <img src={qr} alt="QR Code" />
                                <span className="text-xs font-light">Scan to download</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-[1440px] w-[95%] mx-auto flex flex-col sm:flex-row justify-between py-3 text-sm gap-5">
                <div>
                    <p>Copyright RSIN@2024. All rights reserved. V-0.1.14</p>
                </div>
                <div className="flex flex-wrap gap-8 sm:gap-10 sm:mt-0 mt-5">
                    <a href="">Terms and Conditions</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Cookie Settings</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
