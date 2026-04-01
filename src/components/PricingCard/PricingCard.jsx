import React, { use } from "react";
import Pricing from "./Pricing/Pricing";

const PricingCard = ({ threePricingPromise }) => {
    const threePricingData = use(threePricingPromise);
    // console.log(threePricingData);
    return (
        <section className="max-w-308 w-full mx-auto my-14 md:my-22 lg:my-30">
            <div className="mx-4 text-center space-y-2 md:space-y-4">
                <h2 className="text-color text-4xl lg:text-5xl font-extrabold">
                    Simple, Transparent Pricing
                </h2>
                <p className="max-w-135 mx-auto para-color leading-6 text-sm md:text-base">
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
