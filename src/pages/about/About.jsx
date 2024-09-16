import mission from '../../assets/img/mission.png';
import story from '../../assets/img/story.png';
import webflow from '../../assets/icons/webflow.svg';
import pinterest from '../../assets/icons/pinterest.svg';
import twitch from '../../assets/icons/twitch.svg';
import youtube from '../../assets/icons/youtube.svg';
import google from '../../assets/icons/google.svg';
import expert1 from '../../assets/img/expert1.png';
import expert2 from '../../assets/img/expert2.png';
import expert3 from '../../assets/img/expert3.png';
import expert4 from '../../assets/img/expert4.png';
import expert5 from '../../assets/img/expert5.png';
import expert6 from '../../assets/img/expert6.png';

import {Circle} from '../../components';

export default function About() {
    return (
        <div>
            <header className="wrapper pt-[165px] pb-[160px] relative">
                <Circle top='-113' left='1080' />
                <div>
                    <p className="context">ABOUT US</p>
                    <h3 className="title">A dedicated team of<br /><span className="font-playfair">marketing experts</span></h3>
                    <p className="text-[20px] text-[#7A7979] mt-[40px]">At Marko, we're more than a team – we're a dedicated force of marketing experts<br />driven by passion, innovation, and a relentless pursuit of excellence.</p>
                </div>
            </header>
            <section className="wrapper">
                <p className="text-[#969595] text-[24px] text-center">Our results in numbers</p>
                <div className="flex justify-between mt-[80px]">
                    <div className="text-center">
                        <p className="text-[64px] font-medium">250+</p>
                        <p className="text-[#7A7979] text-[24px] mt-[16px]">Happy clients</p>
                    </div>
                    <div className="text-center">
                        <p className="text-[64px] font-medium">400+</p>
                        <p className="text-[#7A7979] text-[24px] mt-[16px]">Successful projects</p>
                    </div>
                    <div className="text-center">
                        <p className="text-[64px] font-medium">100+</p>
                        <p className="text-[#7A7979] text-[24px] mt-[16px]">Team members</p>
                    </div>
                    <div className="text-center">
                        <p className="text-[64px] font-medium">99%</p>
                        <p className="text-[#7A7979] text-[24px] mt-[16px]">Customer satisfaction</p>
                    </div>
                </div>
            </section>
            <div className="wrapper py-[160px] relative">
                <Circle top="700" left="521" />
                <div className="flex justify-between">
                    <div className="max-w-[640px] mt-[60px]">
                        <p className="context">OUR MISSION</p>
                        <p className="subtitle">Pioneering Success: Fostering Growth, <span className="font-playfair">Igniting Innovation</span></p>
                        <p className="text-[#7A7979] text-[18px] mt-[40px]">At Marko, our journey began with a singular, unwavering mission: to champion the growth of startups. Fuelled by a passion for innovation and a deep-rooted belief in the potential of budding enterprises, we set out to pave a transformative path for businesses.<br /><br />Our mission is simple yet profound—to be the catalyst that propels startups beyond their perceived limits. </p>
                    </div>
                    <img className="w-[560px] h-[640px]" src={mission} />
                </div>
                <div className="flex justify-between mt-[80px]">
                    <img className="w-[560px] h-[640px]" src={story} />
                    <div className="max-w-[640px] mt-[60px]">
                        <p className="context">OUR STORY</p>
                        <p className="subtitle">A Journey of Collaboration: Our <span className="font-playfair">Story with Startups</span></p>
                        <p className="text-[#7A7979] text-[18px] mt-[40px]">At Marko, our story is one of seamless integration and shared aspirations. We're more than just a digital marketing agency; we're your devoted partners, seamlessly integrating into your vision and becoming an extension of your marketing team.</p>
                        <button className="btn mt-[40px]">JOIN OUR TEAM</button>
                    </div>
                </div>
            </div>
            <section className="bg-dark wrapper py-[80px] flex justify-between items-center">
                <p className="text-darkwhite text-[18px]">Trusted By:</p>
                <div className="flex">
                    <img className="mr-[65px] p-[10px]" src={webflow} />
                    <img className="mr-[65px] p-[10px]" src={pinterest} />
                    <img className="mr-[65px] p-[10px]" src={twitch} />
                    <img className="mr-[65px] p-[10px]" src={youtube} />
                    <img src={google} />
                </div>
            </section>
            <div className="wrapper py-[160px]">
                <div>
                    <p className="context">OUR TEAM</p>
                    <p className="subtitle">Our team of expert<br /><span className="font-playfair">marketers</span></p>
                </div>
                <div className="flex justify-between mt-[80px]">
                    <div className="border-[#CCCCCC] border-[1px] max-w-[410px] overflow-hidden">
                        <img className="duration-200 hover:scale-[1.1]" src={expert1} />
                        <div className="p-[32px]">
                            <p className="text-dark text-[32px] font-medium text-center">Wade Warren</p>
                            <p className="text-[#7A7979] text-[24px] text-center mt-[16px]">CEO & Founder</p>
                        </div>
                    </div>
                    <div className="border-[#CCCCCC] border-[1px] max-w-[410px] overflow-hidden">
                        <img className="duration-200 hover:scale-[1.1]" src={expert2} />
                        <div className="p-[32px]">
                            <p className="text-dark text-[32px] font-medium text-center">Guy Hawkins</p>
                            <p className="text-[#7A7979] text-[24px] text-center mt-[16px]">Project Manager</p>
                        </div>
                    </div>
                    <div className="border-[#CCCCCC] border-[1px] max-w-[410px] overflow-hidden">
                        <img className="duration-200 hover:scale-[1.1]" src={expert3} />
                        <div className="p-[32px]">
                            <p className="text-dark text-[32px] font-medium text-center">Jacob Jones</p>
                            <p className="text-[#7A7979] text-[24px] text-center mt-[16px]">Accounts head</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between mt-[25px]">
                    <div className="border-[#CCCCCC] border-[1px] max-w-[410px] overflow-hidden">
                        <img className="duration-200 hover:scale-[1.1]" src={expert4} />
                        <div className="p-[32px]">
                            <p className="text-dark text-[32px] font-medium text-center">Arlene McCoy</p>
                            <p className="text-[#7A7979] text-[24px] text-center mt-[16px]">Marketing Head</p>
                        </div>
                    </div>
                    <div className="border-[#CCCCCC] border-[1px] max-w-[410px] overflow-hidden">
                        <img className="duration-200 hover:scale-[1.1]" src={expert5} />
                        <div className="p-[32px]">
                            <p className="text-dark text-[32px] font-medium text-center">Theresa Webb</p>
                            <p className="text-[#7A7979] text-[24px] text-center mt-[16px]">SEO Expert</p>
                        </div>
                    </div>
                    <div className="border-[#CCCCCC] border-[1px] max-w-[410px] overflow-hidden">
                        <img className="duration-200 hover:scale-[1.1]" src={expert6} />
                        <div className="p-[32px]">
                            <p className="text-dark text-[32px] font-medium text-center">Jerome Bell</p>
                            <p className="text-[#7A7979] text-[24px] text-center mt-[16px]">Social Media Manager</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}