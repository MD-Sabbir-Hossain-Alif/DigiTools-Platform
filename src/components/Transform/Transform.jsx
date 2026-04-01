import React from "react";

const Transform = () => {
    return (
        <section className="linear-bg  py-14 md:py-22 lg:py-30">
            <div className="max-w-308 w-full mx-auto px-4 text-center space-y-2 md:space-y-4 mb-5 md:mb-10 text-white">
                <h2 className="text-4xl lg:text-5xl font-extrabold">
                    Ready to Transform Your Workflow?
                </h2>
                <p className="max-w-150 mx-auto leading-6 opacity-90 text-sm md:text-base">
                    Join thousands of professionals who are already using
                    Digitools to work smarter. Start your free trial today.
                </p>
                <div className="mt-10 space-y-4 ">
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 sm:justify-center sm:items-center mx-auto">
                        <div className="bg-white rounded-full">
                            <button className="btn linear-text rounded-full px-6">
                                Explore Product
                            </button>
                        </div>
                        <button className="btn shadow-none linear-btn rounded-full text-white px-6">
                            View Pricing
                        </button>
                    </div>
                    <p className="max-w-150 mx-auto leading-6 opacity-90 text-sm md:text-base">
                        14-day free trial • No credit card required • Cancel
                        anytime
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Transform;
