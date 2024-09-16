import {useEffect} from 'react';

import {Circle} from '../../components';

export default function Tercon() {
    useEffect(() => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }, [])
    
    return (
        <div className="wrapper">
            <header className="pt-[164px] pb-[80px] relative">
                <Circle top='-113' left='1080' />
                <div>
                    <p className="context">TERMS</p>
                    <p className="title">Terms and<br /><span className="font-playfair">Conditions</span></p>
                    <p className="text-[#7A7979] text-[20px] mt-[40px]">Please read these Terms of Service carefully before using the services provided by Designflow.<br />These Terms govern your access to and use of the services available on our website.</p>
                </div>
            </header>
            <div className="px-[100px] pb-[160px] relative">
                <Circle top="0" left="-66" />
                <Circle top="759" left="860" />
                <div className="p-[64px] text-dark bg-white/[.40]">
                    <div>
                        <p>1. Introduction</p>
                        <p>Welcome to [Your Company Name]. By accessing this website, you agree to comply with these terms and conditions. Please read them carefully before using our services.</p>
                    </div>
                    <div className="mt-[32px]">
                        <p>2. Use of Services</p>
                        <ul className="list-disc">
                            <li>Users must be at least 18 years old to access our services.</li>
                            <li>Unauthorized use or reproduction of content from this website is prohibited.</li>
                        </ul>
                    </div>
                    <div className="mt-[32px]">
                        <p>3. Privacy Policy</p>
                        <ul className="list-disc">
                            <li>Refer to our Privacy Policy for information on how we collect, use, and protect your personal data.</li>
                        </ul>
                    </div>
                    <div className="mt-[32px]">
                        <p>4. Intellectual Property</p>
                        <ul className="list-disc">
                            <li>All content on this website is the intellectual property of [Your Company Name]. Reproduction or distribution without permission is prohibited.</li>
                        </ul>
                    </div>
                    <div className="mt-[32px]">
                        <p>5. Limitations of Liability</p>
                        <ul className="list-disc">
                            <li>We strive to provide accurate information but do not guarantee its completeness or accuracy.</li>
                            <li>[Your Company Name] is not liable for any direct or indirect damages resulting from the use of our services.</li>
                        </ul>
                    </div>
                    <div className="mt-[32px]">
                        <p>6. Third-Party Links</p>
                        <ul className="list-disc">
                            <li>Our website may contain links to third-party websites. We do not endorse or take responsibility for the content or practices of these sites.</li>
                        </ul>
                    </div>
                    <div className="mt-[32px]">
                        <p>7. Modifications</p>
                        <ul className="list-disc">
                            <li>We reserve the right to modify or update these terms and conditions at any time without prior notice.</li>
                        </ul>
                    </div>
                    <div className="mt-[32px]">
                        <p>8. Governing Law</p>
                        <ul className="list-disc">
                            <li>These terms and conditions are governed by and construed in accordance with the laws of [Your Country/State].</li>
                        </ul>
                    </div>
                    <div className="mt-[32px]">
                        <p>9. Contact Information</p>
                        <ul className="list-disc">
                            <li>For any questions regarding these terms and conditions, please contact us at [Your Contact Information].</li>
                        </ul>
                    </div>
                    <div className="mt-[32px]">
                        <p>10. Acceptance of Terms</p>
                        <ul className="list-disc">
                            <li>By using our services, you acknowledge that you have read, understood, and agreed to abide by these terms and conditions.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}