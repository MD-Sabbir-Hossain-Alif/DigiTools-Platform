import { IoCheckmarkOutline } from "react-icons/io5";

const Card = ({ prices, carts, setCarts }) => {
    const { name, description, price, period, tagType, features, icon } =
        prices;
    // console.log(prices);

    const handelBuyBtn = () => {
        setCarts([...carts, prices]);
        // console.log(carts);
    };
    return (
        <div>
            <div className="card bg-base-100 shadow-sm border border-gray-200 text-color rounded-2xl">
                <div className="card-body relative">
                    <span
                        className={`absolute top-2 right-2 badge badge-sm border-none font-medium badge-warning py-2 px-3 ${tagType === "Popular" ? "text-purple-900 bg-purple-300" : tagType === "New" ? "text-green-900 bg-green-300" : ""}`}
                    >
                        {tagType}
                    </span>
                    <div>
                        <img src={icon} />
                    </div>
                    <h2 className="text-xl lg:text-2xl font-bold mt-4">
                        {name}
                    </h2>
                    <p>
                        <span className="text-2xl font-bold">${price}</span>
                        <span className="text-[#627382]">/{period}</span>
                    </p>
                    <p className="text-[#627382]">{description}</p>
                    <ul className="mt-2 flex flex-col gap-2">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <IoCheckmarkOutline className="text-green-500 text-lg" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-2">
                        <button
                            onClick={handelBuyBtn}
                            className="btn btn-primary btn-block linear-btn rounded-full text-white"
                        >
                            Buy New
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
