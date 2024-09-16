import checkwhite from '../../assets/icons/check-white.svg';
import checkblack from '../../assets/icons/check-black.svg';

import {Circle} from '../../components';

export default function Pricing() {
    return (
        <div className="wrapper">
            <header className="relative pt-[160px] pb-[80px]">
                <Circle top='-113' left='1080' />
                <div>
                    <p className="context">PRICING</p>
                    <h3 className="title">Pricing plans for<br /><span className="font-playfair">every need</span></h3>
                    <p className="text-[#7A7979] text-[20px] mt-[40px]">We've curated a range of flexible plans designed to cater to diverse business needs. Whether<br />you're a budding startup or a thriving enterprise.</p>
                </div>
            </header>
            <div className="flex justify-between">
                <div className="py-[48px] px-[56px] max-w-[410px]">
                    <div>
                        <p className="text-[#7A7979] text-[14px] font-medium">For Individuals</p>
                        <p className="text-dark text-[24px] font-bold mt-[8px]">Silver</p>
                        <p className="text-[#7A7979] text-[18px] mt-[8px]">Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.</p>
                    </div>
                    <p className="font-bold text-[48px] text-dark mt-[32px]">$2500 <span className="text-[#7A7979] text-[18px] font-medium">/monthly</span></p>
                    <div className="mt-[32px]">
                        <p className="text-dark text-[18px] font-bold">What's included</p>
                        <ul className="mt-[24px]">
                            <div className="flex items-center">
                                <div className="bg-black py-[8px] px-[7px]">
                                    <img src={checkwhite} />
                                </div>
                                <p className="ml-[16px] text-[#7A7979] text-[18px]">Email Marketing</p>
                            </div>
                            <div className="flex items-center mt-[16px]">
                                <div className="bg-black py-[8px] px-[7px]">
                                    <img src={checkwhite} />
                                </div>
                                <p className="ml-[16px] text-[#7A7979] text-[18px]">Paid Advertising</p>
                            </div>
                            <div className="flex items-center mt-[16px]">
                                <div className="bg-black py-[8px] px-[7px]">
                                    <img src={checkwhite} />
                                </div>
                                <p className="ml-[16px] text-[#7A7979] text-[18px]">SEO & SEM</p>
                            </div>
                            <div className="flex items-center mt-[16px]">
                                <div className="bg-black py-[8px] px-[7px]">
                                    <img src={checkwhite} />
                                </div>
                                <p className="ml-[16px] text-[#7A7979] text-[18px]">Normal Support</p>
                            </div>
                        </ul>
                    </div>
                    <button className="btn mt-[32px]">GET STARTED</button>
                </div>
                <div className="py-[48px] px-[56px] max-w-[410px] bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121]">
                    <div>
                        <p className="text-darkwhite text-[14px] font-medium">For Startups</p>
                        <p className="text-darkwhite text-[24px] font-bold mt-[8px]">Gold</p>
                        <p className="text-darkwhite text-[18px] mt-[8px]">Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.</p>
                    </div>
                    <p className="font-bold text-[48px] text-white mt-[32px]">$5000 <span className="text-darkwhite text-[18px] font-medium">/monthly</span></p>
                    <div className="mt-[32px]">
                        <p className="text-darkwhite text-[18px] font-bold">What's included</p>
                        <ul className="mt-[24px]">
                            <div className="flex items-center">
                                <div className="bg-white py-[8px] px-[7px]">
                                    <img src={checkblack} />
                                </div>
                                <p className="ml-[16px] text-darkwhite text-[18px]">All in silver plan</p>
                            </div>
                            <div className="flex items-center mt-[16px]">
                                <div className="bg-white py-[8px] px-[7px]">
                                    <img src={checkblack} />
                                </div>
                                <p className="ml-[16px] text-darkwhite text-[18px]">Advanced Analytics</p>
                            </div>
                            <div className="flex items-center mt-[16px]">
                                <div className="bg-white py-[8px] px-[7px]">
                                    <img src={checkblack} />
                                </div>
                                <p className="ml-[16px] text-darkwhite text-[18px]">Content Marketing</p>
                            </div>
                            <div className="flex items-center mt-[16px]">
                                <div className="bg-white py-[8px] px-[7px]">
                                    <img src={checkblack} />
                                </div>
                                <p className="ml-[16px] text-darkwhite text-[18px]">Premium Support</p>
                            </div>
                        </ul>
                    </div>
                    <button className="btn mt-[32px]">GET STARTED</button>
                </div>
                <div className="py-[48px] px-[56px] max-w-[410px]">
                    <div>
                        <p className="text-[#7A7979] text-[14px] font-medium">For Enterprises</p>
                        <p className="text-dark text-[24px] font-bold mt-[8px]">Platinum</p>
                        <p className="text-[#7A7979] text-[18px] mt-[8px]">Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.</p>
                    </div>
                    <p className="font-bold text-[48px] text-dark mt-[32px]">$8000 <span className="text-[#7A7979] text-[18px] font-medium">/monthly</span></p>
                    <div className="mt-[32px]">
                        <p className="text-dark text-[18px] font-bold">What's included</p>
                        <ul className="mt-[24px]">
                            <div className="flex items-center">
                                <div className="bg-black py-[8px] px-[7px]">
                                    <img src={checkwhite} />
                                </div>
                                <p className="ml-[16px] text-[#7A7979] text-[18px]">All in gold plan</p>
                            </div>
                            <div className="flex items-center mt-[16px]">
                                <div className="bg-black py-[8px] px-[7px]">
                                    <img src={checkwhite} />
                                </div>
                                <p className="ml-[16px] text-[#7A7979] text-[18px]">Funnel Optimization</p>
                            </div>
                            <div className="flex items-center mt-[16px]">
                                <div className="bg-black py-[8px] px-[7px]">
                                    <img src={checkwhite} />
                                </div>
                                <p className="ml-[16px] text-[#7A7979] text-[18px]">Custom marketing plan</p>
                            </div>
                            <div className="flex items-center mt-[16px]">
                                <div className="bg-black py-[8px] px-[7px]">
                                    <img src={checkwhite} />
                                </div>
                                <p className="ml-[16px] text-[#7A7979] text-[18px]">Dedicated Support</p>
                            </div>
                        </ul>
                    </div>
                    <button className="btn mt-[32px]">GET STARTED</button>
                </div>
            </div>
            <section className="pt-[80px] pb-[160px]">
                <p className="text-center text-dark text-[48px] font-medium">Looking for a custom marketing<br />package or campaign?</p>
                <p className="text-[#7A7979] text-[20px] text-center mt-[40px]">Let's tailor a marketing package or campaign that suits your unique goals and<br />amplifies your brand's impact</p>
                <button className="btn mt-[40px] block mx-auto">CONTACT US</button>
            </section>
        </div>
    )
}