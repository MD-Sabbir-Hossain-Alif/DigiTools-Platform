import { IoPlayOutline } from "react-icons/io5";
import active from "../../assets/active.png";
import banner from "../../assets/banner.png";
const Banner = () => {
    return (
        <section className="max-w-308 w-full mx-auto px-4 my-8 md:my-14 lg:my-22 flex justify-center items-center flex-col-reverse md:flex-row gap-8 lg:justify-between">
            {/* banner content */}
            <div className="max-w-160 w-full space-y-2 sm:space-y-4 text-center sm:text-left">
                <div className="inline-flex items-center rounded-full py-2 px-4 gap-1 bg-[#e1e7ff]">
                    <img src={active} alt="AI tools dashboard preview" />
                    <p className="linear-text text-sm md:text-base">
                        New: AI-Powered Tools Available
                    </p>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-extrabold text-[#101727] leading-tight sm:leading-[1.2]">
                    Supercharge Your Digital Workflow
                </h1>
                <p className="text-[#627382] text-sm sm:text-lg leading-6 md:leading-7">
                    Access premium AI tools, design assets, templates, and
                    productivity <br className="hidden lg:block" /> software—all
                    in one place. Start creating faster today.
                    <br className="hidden lg:block" />
                    Explore Products
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                    <button
                        className="btn linear-btn text-white font-bold rounded-full 
                    "
                    >
                        Explore Products
                    </button>
                    <button
                        className="btn linear-border-btn font-bold rounded-full border-transparent
                    "
                    >
                        <IoPlayOutline className="text-[#4f39f6]" />
                        <span className="linear-text">Watch Demo</span>
                    </button>
                </div>
            </div>

            {/* banner image */}
            <div>
                <img className="max-w-125 w-full" src={banner} alt="" />
            </div>
        </section>
    );
};

export default Banner;
