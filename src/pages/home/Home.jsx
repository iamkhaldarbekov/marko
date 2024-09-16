import google from '../../assets/icons/google.svg';
import facebook from '../../assets/icons/facebook.svg';
import webflow from '../../assets/icons/webflow.svg';
import pinterest from '../../assets/icons/pinterest.svg';
import twitch from '../../assets/icons/twitch.svg';
import youtube from '../../assets/icons/youtube.svg';
import header from '../../assets/img/header.png';
import project from '../../assets/img/project.png';
import project2 from '../../assets/img/project2.png';
import project3 from '../../assets/img/project3.png';
import project4 from '../../assets/img/project4.png';
import article1 from '../../assets/img/article1.png';
import article2 from '../../assets/img/article2.png';
import article3 from '../../assets/img/article3.png';

import {Circle} from '../../components';

export default function Home() {
    return (
        <div className="relative">
            <Circle top='-113' left='1080' />
            <div className="wrapper pt-[165px] pb-[262px]">
                <h3 className="title">We help startup<br />grow to <span className="font-playfair">next level!</span></h3>
                <p className="mt-[40px] text-[#7A7979] text-[20px]">At Marko, we specialise in crafting tailored digital marketing strategies that ignite<br />growth and elevate brands to the next level.</p>
            </div>
            <section className="bg-dark wrapper relative pt-[500px]">
                <img className="absolute top-[-182px]" src={header} />
                <div className="flex justify-between">
                    <img className="py-[17px] px-[25px]" src={facebook} />
                    <img className="py-[17px] px-[25px]" src={webflow} />
                    <img className="py-[17px] px-[25px]" src={pinterest} />
                    <img className="py-[17px] px-[25px]" src={twitch} />
                    <img className="py-[17px] px-[25px]" src={youtube} />
                    <img className="py-[17px] px-[25px]" src={google} />
                </div>
            </section>
            <div className="py-[160px] relative wrapper">
                <Circle top='-10' left='-105' />
                <div>
                    <p className="context">OUR SERVICES</p>
                    <h3 className="subtitle">Our special marketing<br />services to <span className="font-playfair">grow your startup</span></h3>
                </div>
                <div className="mt-[80px] flex justify-between">
                    <div className="w-[400px] p-[48px] bg-white border-[#1A1A1A]/[0.15] border-[1px]">
                        <p className="text-dark text-[32px] font-medium">Email Marketing</p>
                        <p className="text-[#7A7979] mt-[24px]">Engage, captivate, and convert with our targeted and personalized email marketing strategies.</p>
                        <button className="btn mt-[24px]">READ MORE</button>
                    </div>
                    <div className="w-[400px] p-[48px] bg-white border-[#1A1A1A]/[0.15] border-[1px]">
                        <p className="text-dark text-[32px] font-medium">Content Marketing</p>
                        <p className="text-[#7A7979] mt-[24px]">Craft compelling narratives and resonate with your audience through our impactful content marketing.</p>
                        <button className="btn mt-[24px]">READ MORE</button>
                    </div>
                    <div className="w-[400px] p-[48px] bg-white border-[#1A1A1A]/[0.15] border-[1px]">
                        <p className="text-dark text-[32px] font-medium">SEO & SEM</p>
                        <p className="text-[#7A7979] mt-[24px]">Boost visibility, outrank competitors, and dominate search engines with our cutting-edge SEO and SEM tactics.</p>
                        <button className="btn mt-[24px]">READ MORE</button>
                    </div>
                </div>
            </div>
            <div className="wrapper pb-[160px] relative">
                <Circle top='120' left='1124' />
                <Circle top='927' left='0' />
                <Circle top='1767' left='1117' />
                <Circle top='2592' left='-189' />
                <div>
                    <p className="context">OUR PROJECTS</p>
                    <p className="subtitle">Check out our successful<br /><span className="font-playfair">projects & case studies</span></p>
                </div>
                <div className="mt-[80px]">
                    <div className="h-[600px] relative mb-[40px]">
                        <img className="h-full absolute -z-10" src={project} />
                        <div className="absolute bottom-[80px] left-[80px] max-w-[620px] p-[32px] backdrop-blur-2xl">
                            <p className="text-darkwhite text-[32px] font-medium">NexaBoost</p>
                            <p className="text-[#969595] mt-[16px]">Embark on a journey to ignite exponential growth as we leverage innovative strategies, captivating content, and data-driven tactics. Viral Velocity is your ticket to skyrocketing brand recognition.</p>
                        </div>
                    </div>
                    <div className="h-[600px] relative mb-[40px]">
                        <img className="h-full absolute -z-10" src={project2} />
                        <div className="absolute bottom-[80px] left-[80px] max-w-[620px] p-[32px] backdrop-blur-2xl">
                            <p className="text-darkwhite text-[32px] font-medium">BrandLift360</p>
                            <p className="text-[#969595] mt-[16px]">Innovate your outreach with Revolutionize Reach, where we dissect audience behavior, engineer precise targeting, and orchestrate campaigns that resonate. It's time to unlock untapped markets.</p>
                        </div>
                    </div>
                    <div className="h-[600px] relative mb-[40px]">
                        <img className="h-full absolute -z-10" src={project3} />
                        <div className="absolute bottom-[80px] left-[80px] max-w-[620px] p-[32px] backdrop-blur-2xl">
                            <p className="text-darkwhite text-[32px] font-medium">ElevateAura</p>
                            <p className="text-[#969595] mt-[16px]">Experience a transformational journey with Conversion Catalyst, where every click counts towards driving sales. Through strategic funnel optimization, compelling content.</p>
                        </div>
                    </div>
                    <div className="h-[600px] relative">
                        <img className="h-full absolute -z-10" src={project4} />
                        <div className="absolute bottom-[80px] left-[80px] max-w-[620px] p-[32px] backdrop-blur-2xl">
                            <p className="text-darkwhite text-[32px] font-medium">StrivePulse</p>
                            <p className="text-[#969595] mt-[16px]">Master the art of SEO Alchemy and witness the magic of your brand ascending search engine ranks. With our blend of technical prowess and content finesse, your online presence will transmute into a beacon of authority and visibility.</p>
                        </div>
                    </div>
                </div>
            </div>
            <section className="relative overflow-hidden">
                <div className="flex items-center animate-ticker whitespace-nowrap">
                    <p className="text-[64px] text-dark">SEO</p>
                    <div className="p-[34px]">
                        <div className="rounded-full bg-[#D9D9D9] w-[10px] h-[10px]" />
                    </div>
                    <p className="text-[64px] text-dark">Email Marketing</p>
                    <div className="p-[34px]">
                        <div className="rounded-full bg-[#D9D9D9] w-[10px] h-[10px]" />
                    </div>
                    <p className="text-[64px] text-dark">Paid Advertising</p>
                    <div className="p-[34px]">
                        <div className="rounded-full bg-[#D9D9D9] w-[10px] h-[10px]" />
                    </div>
                    <p className="text-[64px] text-dark">Funnel Optimization</p>
                    <div className="p-[34px]">
                        <div className="rounded-full bg-[#D9D9D9] w-[10px] h-[10px]" />
                    </div>
                    <p className="text-[64px] text-dark">Content Marketing</p>
                </div>
            </section>
            <div className="wrapper py-[160px] relative">
                <Circle top="985" left="20" />
                <div>
                    <p className="context">OUR INSIGHTS</p>
                    <h3 className="subtitle">Browse our latest articles and<br /><span className="font-playfair">resources on marketing.</span></h3>
                </div>
                <div className="mt-[80px] flex justify-between">
                    <div className="max-w-[410px] border-[1px] border-[#CCCCCC]">
                        <img src={article1} />
                        <div className="p-[32px]">
                            <p className="text-[24px] leading-[30px] font-medium text-dark">Mastering the Art of Personalization</p>
                            <p className="text-[#7A7979] mt-[24px]">Explore the power of personalization and its impact on enhancing customer engagement and conversion rates.</p>
                        </div>
                    </div>
                    <div className="max-w-[410px] border-[1px] border-[#CCCCCC]">
                        <img src={article2} />
                        <div className="p-[32px]">
                            <p className="text-[24px] leading-[30px] font-medium text-dark">Decoding the Algorithm: Latest Trends and Tips for SEO</p>
                            <p className="text-[#7A7979] mt-[24px]">Delve into the newest trends and effective strategies to stay ahead in the ever-evolving landscape of SEO.</p>
                        </div>
                    </div>
                    <div className="max-w-[410px] border-[1px] border-[#CCCCCC]">
                        <img src={article3} />
                        <div className="p-[32px]">
                            <p className="text-[24px] leading-[30px] font-medium text-dark">The Future of Social Media Marketing</p>
                            <p className="text-[#7A7979] mt-[24px]">Uncover the emerging trends and future prospects in social media marketing to leverage platforms for optimal brand growth.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}