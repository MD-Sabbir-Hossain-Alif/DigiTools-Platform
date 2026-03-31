import React, { use } from "react";
import Pricing from "./Pricing/Pricing";

const PricingCard = ({ threePricingPromise }) => {
    const threePricingData = use(threePricingPromise);
    // console.log(threePricingData);
    return (
        <section className="max-w-400 w-[75%] mx-auto my-30 bg-[#f9fafc]">
            <div className="text-center space-y-4">
                <h2 className="text-color text-5xl font-extrabold">
                    Simple, Transparent Pricing
                </h2>
                <p className="max-w-135 mx-auto para-color leading-6">
                    Choose the plan that fits your needs. Upgrade or downgrade
                    anytime.
                </p>
                {/* pricing card */}
                <section className=" max-w-300 mx-auto sm:w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    {threePricingData.map((pricing) => (
                        <Pricing key={pricing.name} pricing={pricing} />
                    ))}
                </section>
            </div>
        </section>
    );
};

export default PricingCard;
