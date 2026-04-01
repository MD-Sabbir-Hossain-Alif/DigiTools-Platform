import React from "react";
import user from "../../assets/user.png";
import packageBox from "../../assets/package.png";
import rocket from "../../assets/rocket.png";

const GetStarted = () => {
    return (
        <section className="my-30 bg-[#f9fafc]">
            <div className="max-w-300 w-full mx-auto px-4 sm:px-0 text-center space-y-4">
                <h2 className="text-color text-5xl font-extrabold">
                    Get Started in 3 Steps
                </h2>
                <p className="max-w-135 mx-auto para-color leading-6">
                    Start using premium digital tools in minutes, not hours.
                </p>
                {/* get started card */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    <div className=" relative card border-2 border-[#f1f1f1] bg-white flex flex-col gap-4 px-6 py-20">
                        <span className="absolute top-5 right-5 text-white text-sm linear-bg rounded-full px-3.5 py-2.5">
                            01
                        </span>
                        <div className="flex items-center justify-center px-3 py-4.5 bg-purple-100 rounded-full w-25 mx-auto">
                            <img src={user} />
                        </div>
                        <h4 className="text-2xl text-color font-bold">
                            Create Account
                        </h4>
                        <p className="para-color">
                            Sign up for free in seconds. No credit card required
                            to get started.
                        </p>
                    </div>
                    <div className=" relative card border-2 border-[#f1f1f1] bg-white flex flex-col gap-4 px-6 py-20">
                        <span className="absolute top-5 right-5 text-white text-sm linear-bg rounded-full px-3 py-2.5">
                            02
                        </span>
                        <div className="flex items-center justify-center px-3 py-4.5 bg-purple-100 rounded-full w-25 mx-auto">
                            <img src={packageBox} />
                        </div>
                        <h4 className="text-2xl text-color font-bold">
                            Choose Products
                        </h4>
                        <p className="para-color">
                            Browse our catalog and select the tools that fit
                            your needs.
                        </p>
                    </div>
                    <div className=" relative card border-2 border-[#f1f1f1] bg-white flex flex-col gap-4 px-6 py-20">
                        <span className="absolute top-5 right-5 text-white text-sm linear-bg rounded-full px-3 py-2.5">
                            03
                        </span>
                        <div className="flex items-center justify-center px-3 py-4.5 bg-purple-100 rounded-full w-25 mx-auto">
                            <img src={rocket} />
                        </div>
                        <h4 className="text-2xl text-color font-bold">
                            Start Creating
                        </h4>
                        <p className="para-color">
                            Download and start using your premium tools
                            immediately.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetStarted;
