import contact from '../../assets/img/contact.png';

import {Circle} from '../../components';

export default function Contact() {
    return (
        <div>
            <header className="py-[160px] relative wrapper">
            <Circle top='-113' left='1080' />
            <Circle top='606' left='-200' />
                <div>
                    <p className="context">CONTACT US</p>
                    <p className="title">Let’s talk about<br />how Marko can<br /><span className="font-playfair">help your business</span></p>
                    <p className="mt-[40px] text-[#7A7979] text-[20px]">Harness our expertise at Marko to propel your startup to new heights. Click below to explore<br />tailored strategies that will unleash your brand's full potential and drive unprecedented growth!</p>
                </div>
            </header>
            <div className="flex justify-between">
                <div className="py-[180px] pl-[80px]">
                    <div>
                        <p className="text-[#7A7979] text-[14px] font-medium tracking-[3px]">LOCATION</p>
                        <p className="mt-[32px] text-dark font-medium text-[24px]">2972 Westheimer Rd.<br />Santa Ana, Illinois<br />85486</p>
                    </div>
                    <div className="mt-[64px]">
                        <p className="text-[#7A7979] text-[14px] font-medium tracking-[3px]">GENERAL CONTACT</p>
                        <p className="mt-[32px] text-dark font-medium text-[24px]">hidesignflow@gmail.com</p>
                        <p className="mt-[16px] text-dark font-medium text-[24px]">(480) 555-0103</p>
                    </div>
                    <div className="mt-[64px]">
                        <p className="text-[#7A7979] text-[14px] font-medium tracking-[3px]">SOCIAL MEDIA</p>
                        <p className="mt-[32px] text-dark font-medium text-[24px]">Twitter</p>
                        <p className="mt-[16px] text-dark font-medium text-[24px]">LinkedIn</p>
                        <p className="mt-[16px] text-dark font-medium text-[24px]">Instagram</p>
                    </div>
                </div>
                <div className="relative w-[929px]">
                    <img className="absolute -z-10 left-0 top-0 w-[100%] h-[100%]" src={contact} />
                    <div className="absolute top-[160px] right-[80px] px-[32px] py-[48px] backdrop-blur-xl bg-white/25">
                        <div>
                            <p className="subtitle text-white">Contact Us</p>
                            <p className="text-darkwhite mt-[16px] text-[18px]">Please fill out the form below and we will contact you in 24 hours.</p>
                        </div>
                        <div className="mt-[48px]">
                            <div>
                                <input className="mr-[10px] bg-transparent outline-none text-darkwhite border-[darkwhite] border-b-[1px] w-[243px] pb-[9px]" type="text" placeholder="Full Name" />
                                <input className="bg-transparent outline-none text-darkwhite border-[darkwhite] border-b-[1px] w-[243px] pb-[9px]" type="text" placeholder="Email Address" />
                            </div>
                            <div className="mt-[48px]">
                                <input className="mr-[10px] bg-transparent outline-none text-darkwhite border-[darkwhite] border-b-[1px] w-[243px] pb-[9px]" type="text" placeholder="Phone Number" />
                                <input className="bg-transparent outline-none text-darkwhite border-[darkwhite] border-b-[1px] w-[243px] pb-[9px]" type="text" placeholder="Company Name" />
                            </div>
                            <input className="bg-transparent outline-none text-darkwhite border-[darkwhite] border-b-[1px] w-[100%] pb-[9px] mt-[48px]" type="text" placeholder="Your Message" />
                            <button className="btn mt-[48px] text-darkwhite">SEND MESSAGE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}