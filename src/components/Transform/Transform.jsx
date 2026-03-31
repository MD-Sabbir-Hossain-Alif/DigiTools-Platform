import React from "react";

const Transform = () => {
    return (
        <section className="max-w-400 mx-auto w-full linear-bg py-30">
            <div className="max-w-300 w-full mx-auto text-center space-y-4 text-white">
                <h2 className=" text-5xl font-extrabold">
                    Ready to Transform Your Workflow?
                </h2>
                <p className="max-w-150 mx-auto leading-6 opacity-90">
                    Join thousands of professionals who are already using
                    Digitools to work smarter. Start your free trial today.
                </p>
                <div className="mt-10 space-y-4 ">
                    <div className="flex gap-2 justify-center items-center">
                        <div className="bg-white rounded-full">
                            <button className="btn linear-text rounded-full px-6">
                                Explore Product
                            </button>
                        </div>
                        <button className="btn shadow-none linear-btn rounded-full text-white px-6">
                            View Pricing
                        </button>
                    </div>
                    <p className="max-w-150 mx-auto leading-6 opacity-90">
                        14-day free trial • No credit card required • Cancel
                        anytime
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Transform;
