import { use } from "react";
import Card from "./Card/Card";

const Main = ({ pricingPromise }) => {
    const pricing = use(pricingPromise);

    // console.log(pricing);
    return (
        <main className="max-w-400 w-[75%] mx-auto my-30">
            <div className="text-center space-y-4  mb-10">
                <h2 className="text-color text-5xl font-extrabold">
                    Premium Digital Tools
                </h2>
                <p className="max-w-135 mx-auto para-color leading-6">
                    Choose from our curated collection of premium digital
                    products designed to boost your productivity and creativity.
                </p>
                <div className="tabs tabs-box bg-transparent shadow-none border border-gray-300 rounded-full inline-block font-bold">
                    <input
                        type="radio"
                        name="my_tabs_1"
                        className="tab rounded-full "
                        aria-label="Products"
                        defaultChecked
                    />
                    <input
                        type="radio"
                        name="my_tabs_1"
                        className="tab rounded-full"
                        aria-label="Cart (0)"
                    />
                </div>
            </div>
            {/* cards section */}
            <section className=" max-w-300 mx-auto sm:w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {pricing.map((prices) => (
                    <Card key={prices.id} prices={prices} />
                ))}
            </section>
        </main>
    );
};

export default Main;
