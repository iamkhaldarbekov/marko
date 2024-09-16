import project from '../../assets/img/project.png';
import project2 from '../../assets/img/project2.png';
import project3 from '../../assets/img/project3.png';
import project4 from '../../assets/img/project4.png';
import project5 from '../../assets/img/project5.png';
import project6 from '../../assets/img/project6.png';
import project7 from '../../assets/img/project7.png';
import project8 from '../../assets/img/project8.png';

import {Circle} from '../../components';

export default function Projects() {
    return (
        <div className="wrapper">
            <header className="relative pt-[164px] pb-[80px]">
                <Circle top='-113' left='1080' />
                <div>
                    <p className="context">CASE STUDIES</p>
                    <p className="title">Browse our successful<br /><span className="font-playfair">Case Studies</span></p>
                    <p className="text-[#7A7979] text-[20px] mt-[40px]">Discover the transformative impact through our case studies, where success stories unfold. Dive into real-world<br />examples showcasing how our strategies drive growth and elevate startups to unparalleled success</p>
                </div>
            </header>
            <div className="pb-[160px] flex justify-between relative">
                <Circle top="620" left="630" />
                <Circle top="940" left="-260" />
                <Circle top="2060" left="300" />
                <div>
                    <div className="max-w-[620px]">
                        <img className="h-[420px]" src={project} />
                        <div className="mt-[40px]">
                            <p className="text-dark text-[32px] font-medium">NexaBoost</p>
                            <p className="text-[18px] text-[#7A7979] mt-[32px]">Embark on a journey to ignite exponential growth as we leverage innovative strategies, captivating content, and data-driven tactics. Viral Velocity is your ticket to skyrocketing brand recognition.</p>
                        </div>
                    </div>
                    <div className="max-w-[620px] mt-[120px]">
                        <img className="h-[420px]" src={project3} />
                        <div className="mt-[40px]">
                            <p className="text-dark text-[32px] font-medium">ElevateAura</p>
                            <p className="text-[18px] text-[#7A7979] mt-[32px]">Experience a transformational journey with Conversion Catalyst, where every click counts towards driving sales. Through strategic funnel optimization, compelling content, and pinpoint targeting.</p>
                        </div>
                    </div>
                    <div className="max-w-[620px] mt-[120px]">
                        <img className="h-[420px]" src={project5} />
                        <div className="mt-[40px]">
                            <p className="text-dark text-[32px] font-medium">VividVibe</p>
                            <p className="text-[18px] text-[#7A7979] mt-[32px]">Embark on a journey to ignite exponential growth as we leverage innovative strategies, captivating content, and data-driven tactics. Viral Velocity is your ticket to skyrocketing brand recognition.</p>
                        </div>
                    </div>
                    <div className="max-w-[620px] mt-[120px]">
                        <img className="h-[420px]" src={project7} />
                        <div className="mt-[40px]">
                            <p className="text-dark text-[32px] font-medium">AscendiaReach</p>
                            <p className="text-[18px] text-[#7A7979] mt-[32px]">Experience a transformational journey with Conversion Catalyst, where every click counts towards driving sales. Through strategic funnel optimization, compelling content, and pinpoint targeting.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="max-w-[620px] mt-[160px]">
                        <img className="h-[420px]" src={project2} />
                        <div className="mt-[40px]">
                            <p className="text-dark text-[32px] font-medium">BrandLift360</p>
                            <p className="text-[18px] text-[#7A7979] mt-[32px]">Innovate your outreach with Revolutionize Reach, where we dissect audience behavior, engineer precise targeting, and orchestrate campaigns that resonate. It's time to unlock untapped markets.</p>
                        </div>
                    </div>
                    <div className="max-w-[620px] mt-[120px]">
                        <img className="h-[420px]" src={project4} />
                        <div className="mt-[40px]">
                            <p className="text-dark text-[32px] font-medium">StrivePulse</p>
                            <p className="text-[18px] text-[#7A7979] mt-[32px]">Master the art of SEO Alchemy and witness the magic of your brand ascending search engine ranks. With our blend of technical prowess and content finesse.</p>
                        </div>
                    </div>
                    <div className="max-w-[620px] mt-[120px]">
                        <img className="h-[420px]" src={project6} />
                        <div className="mt-[40px]">
                            <p className="text-dark text-[32px] font-medium">MomentumEdge</p>
                            <p className="text-[18px] text-[#7A7979] mt-[32px]">Innovate your outreach with Revolutionize Reach, where we dissect audience behavior, engineer precise targeting, and orchestrate campaigns that resonate. It's time to unlock untapped markets.</p>
                        </div>
                    </div>
                    <div className="max-w-[620px] mt-[120px]">
                        <img className="h-[420px]" src={project8} />
                        <div className="mt-[40px]">
                            <p className="text-dark text-[32px] font-medium">IgniteScape</p>
                            <p className="text-[18px] text-[#7A7979] mt-[32px]">Master the art of SEO Alchemy and witness the magic of your brand ascending search engine ranks. With our blend of technical prowess and content finesse.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}