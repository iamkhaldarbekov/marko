import {Link} from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-dark wrapper pt-[120px]">
            <div className="flex justify-between">
                <div className="max-w-[346px]">
                    <p className="text-darkwhite text-[32px] font-medium">Marko.</p>
                    <p className="text-[18px] text-[#969595] mt-[40px]">Lorem ipsum dolor sit amet consectetur. Pellentesque dis pellentesque non ipsum eget enim donec donec.</p>
                </div>
                <div className="flex">
                    <div className="mr-[120px]">
                        <p className="text-[#F6F5F4] text-[24px] font-medium">Address:</p>
                        <ul className="mt-[40px]">
                            <li className="text-[#969595] mb-[16px] hover:underline">4140 Parker Rd. Allentown</li>
                            <li className="text-[#969595] mb-[16px] hover:underline">hello@marko.agency</li>
                            <li className="text-[#969595] hover:underline">+1 (225) 555-0118</li>
                        </ul>
                    </div>
                    <div className="mr-[120px]">
                        <p className="text-[#F6F5F4] text-[24px] font-medium">Quick Links</p>
                        <div className="flex">
                            <ul className="mt-[40px] mr-[40px]">
                                <li className="text-[#969595] mb-[16px] hover:underline">Home</li>
                                <li className="text-[#969595] mb-[16px] hover:underline">About Us</li>
                                <li className="text-[#969595] mb-[16px] hover:underline">Projects</li>
                                <li className="text-[#969595] hover:underline">Blogs</li>
                            </ul>
                            <ul className="mt-[40px]">
                                <li className="text-[#969595] mb-[16px] hover:underline">Blog Post</li>
                                <li className="text-[#969595] mb-[16px] hover:underline">Pricing</li>
                                <li className="text-[#969595] mb-[16px] hover:underline">Contact Us</li>
                                <li className="text-[#969595] hover:underline">Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p className="text-[#F6F5F4] text-[24px] font-medium">Follow Us</p>
                        <ul className="mt-[40px]">
                            <li className="text-[#969595] mb-[16px] hover:underline">Twitter</li>
                            <li className="text-[#969595] mb-[16px] hover:underline">LinkedIn</li>
                            <li className="text-[#969595] hover:underline">Instagram</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-[#969595] border-t-[1px] mt-[80px] py-[16px] flex justify-between">
                <p className="text-[18px] text-[#969595] hover:underline">Copyright @ Kartik Bansal 2023. All Rights Reserved.</p>
                <div className="flex">
                    <Link to='/terms-and-conditions' className="text-[18px] text-[#969595] mr-[40px] hover:underline">Terms & Conditions</Link>
                    <p className="text-[18px] text-[#969595] hover:underline">Licenses</p>
                </div>
            </div>
        </footer>
    )
}