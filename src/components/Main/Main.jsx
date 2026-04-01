import { use, useState } from "react";
import Card from "./Card/Card";
import Cart from "./Cart/Cart";
import { IoCartOutline } from "react-icons/io5";
import { toast } from "react-toastify";

const Main = ({ pricingPromise, carts, setCarts }) => {
    const pricing = use(pricingPromise);
    // console.log(pricing);

    const [activeTab, setActiveTab] = useState("products");
    // console.log(activeTab);

    const handelCheckoutBtn = () => {
        // console.log("i'm clicked");
        setCarts([]);
        toast.success("Checkout Successfully");
    };

    // total price
    const totalPrice = carts.reduce((total, cart) => total + cart.price, 0);

    // console.log(totalPrice);

    return (
        <main className="max-w-308 w-full mx-auto px-4 my-14 md:my-22 lg:my-30">
            <div className="text-center space-y-2 md:space-y-4 mb-5 md:mb-10">
                <h2 className="text-color text-4xl lg:text-5xl font-extrabold">
                    Premium Digital Tools
                </h2>
                <p className="max-w-135 mx-auto para-color leading-6 text-sm md:text-base">
                    Choose from our curated collection of premium digital
                    products designed to boost your productivity and creativity.
                </p>
                <div className="tabs tabs-box bg-transparent shadow-none border border-gray-300 rounded-full inline-block font-bold">
                    <input
                        type="radio"
                        name="my_tabs_1"
                        className="tab rounded-full checked:bg-linear-to-r from-[#4f39f6] to-[#9514fa] checked:text-white"
                        aria-label="Products"
                        defaultChecked
                        onClick={() => {
                            setActiveTab("products");
                        }}
                    />
                    <input
                        type="radio"
                        name="my_tabs_1"
                        className="tab rounded-full checked:bg-linear-to-r from-[#4f39f6] to-[#9514fa] checked:text-white"
                        aria-label={`Cart (${carts.length})`}
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
                <section className="border border-gray-200 p-5 md:p-10 rounded-2xl space-y-3 md:space-y-6">
                    {carts.length === 0 ? (
                        <p className="text-3xl sm:text-4xl text-center text-gray-500 flex items-center justify-center flex-col gap-5 p-0 sm:p-10">
                            <IoCartOutline className="text-6xl" />
                            Your cart is empty
                        </p>
                    ) : (
                        <>
                            <h4 className="text-color text-2xl font-bold">
                                Your Cart
                            </h4>
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
                                <p className="text-xl sm:text-2xl font-bold">
                                    Total:
                                </p>
                                <p className="text-xl sm:text-2xl font-bold">
                                    ${totalPrice.toFixed(2)}
                                </p>
                            </div>
                            <button
                                onClick={handelCheckoutBtn}
                                className="btn linear-btn w-full rounded-full text-white font-bold"
                            >
                                Proceed to Checkout
                            </button>
                        </>
                    )}
                </section>
            )}
        </main>
    );
};

export default Main;
