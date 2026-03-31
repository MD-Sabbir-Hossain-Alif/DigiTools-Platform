import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { TbBrandInstagramFilled } from "react-icons/tb";

const Footer = () => {
    return (
        <footer className="max-w-400 mx-auto w-full bg-[#101727] pt-30 ">
            <div className="footer sm:footer-horizontal text-white max-w-300 w-full mx-auto pb-20">
                <aside className="space-y-4">
                    <h3 className="text-3xl font-extrabold">DigiTools</h3>
                    <p className="opacity-80">
                        Premium digital tools for creators,
                        <br />
                        professionals, and businesses. Work smarter
                        <br />
                        with our suite of powerful tools.
                    </p>
                </aside>
                <nav>
                    <h6 className="text-lg font-medium mb-2 text-white">
                        Product
                    </h6>
                    <a className="link link-hover opacity-80">Features</a>
                    <a className="link link-hover opacity-80">Pricing</a>
                    <a className="link link-hover opacity-80">Templates</a>
                    <a className="link link-hover opacity-80">Integrations</a>
                </nav>
                <nav>
                    <h6 className="text-lg font-medium mb-2 text-white">
                        Company
                    </h6>
                    <a className="link link-hover opacity-80">About</a>
                    <a className="link link-hover opacity-80">Blog</a>
                    <a className="link link-hover opacity-80">Careers</a>
                    <a className="link link-hover opacity-80">Press</a>
                </nav>
                <nav>
                    <h6 className="text-lg font-medium mb-2 text-white">
                        Resources
                    </h6>
                    <a className="link link-hover opacity-80">Documentation</a>
                    <a className="link link-hover opacity-80">Help Center</a>
                    <a className="link link-hover opacity-80">Community</a>
                    <a className="link link-hover opacity-80">Contact</a>
                </nav>
                <nav>
                    <h6 className="text-lg font-medium mb-2 text-white">
                        Social Links
                    </h6>
                    <div className="grid grid-flow-col gap-4">
                        <a
                            href="#"
                            className="bg-white px-2 py-2 rounded-full text-black text-3xl"
                        >
                            <TbBrandInstagramFilled />
                        </a>
                        <a
                            href="#"
                            className="bg-white px-2 py-2 rounded-full text-black text-3xl"
                        >
                            <FaSquareFacebook />
                        </a>
                        <a
                            href="#"
                            className="bg-white px-2 py-2 rounded-full text-black text-3xl"
                        >
                            <RiTwitterXFill />
                        </a>
                    </div>
                </nav>
            </div>
            <div className="max-w-300 w-full mx-auto flex justify-between items-center text-[#fafafa] py-8 border-t border-gray-500 opacity-50">
                <p>© 2026 Digitools. All rights reserved.</p>
                <div className="flex gap-5">
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
