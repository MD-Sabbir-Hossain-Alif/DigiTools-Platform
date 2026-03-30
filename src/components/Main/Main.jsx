import { use, useState } from "react";
import Card from "./Card/Card";
import Cart from "./Cart/Cart";

const Main = ({ pricingPromise }) => {
    const pricing = use(pricingPromise);
    // console.log(pricing);

    const [activeTab, setActiveTab] = useState("products");
    // console.log(activeTab);

    const [carts, setCarts] = useState([]);

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
                        onClick={() => {
                            setActiveTab("products");
                        }}
                    />
                    <input
                        type="radio"
                        name="my_tabs_1"
                        className="tab rounded-full"
                        aria-label="Cart (0)"
                        onClick={() => {
                            setActiveTab("cart");
                        }}
                    />
                </div>
            </div>
            {/* cards section */}
            {activeTab === "products" && (
                <section className=" max-w-300 mx-auto sm:w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pricing.map((prices) => (
                        <Card
                            key={prices.id}
                            prices={prices}
                            carts={carts}
                            setCarts={setCarts}
                        />
                    ))}
                </section>
            )}

            {/* cart section */}
            {activeTab === "cart" && (
                <section className="border border-gray-200 p-10 rounded-2xl space-y-6">
                    <h4 className="text-color text-2xl font-bold">Your Cart</h4>
                    {/* cart section */}
                    {carts.map((cart) => (
                        <Cart
                            key={cart.id}
                            cart={cart}
                            carts={carts}
                            setCarts={setCarts}
                        />
                    ))}
                    <div className="flex justify-between items-center">
                        <p>Total:</p>
                        <p className="text-2xl font-bold">$89</p>
                    </div>
                    <button className="btn linear-btn w-full rounded-full text-white font-bold">
                        Proceed to Checkout
                    </button>
                </section>
            )}
        </main>
    );
};

export default Main;
